use crate::models::Specification;
use jns42_core::{
  models::{ArenaSchemaItem, SchemaType},
  naming::Sentence,
};
use proc_macro2::TokenStream;
use quote::{TokenStreamExt, format_ident, quote};
use std::{collections::HashSet, error::Error};

pub fn generate_file_token_stream(
  specification: &Specification,
) -> Result<TokenStream, Box<dyn Error>> {
  let mut tokens = quote! {};

  for (key, item) in specification.arena.iter().enumerate() {
    tokens.append_all(generate_type_token_stream(specification, &key, item));
  }

  Ok(tokens)
}

fn generate_type_token_stream(
  specification: &Specification,
  key: &usize,
  item: &ArenaSchemaItem,
) -> Result<TokenStream, Box<dyn Error>> {
  let mut tokens = quote! {};

  let documentation: Vec<_> = [
    item.title.clone(),
    item.description.clone(),
    item.location.as_ref().map(|id| id.to_string()),
  ]
  .into_iter()
  .flatten()
  .collect();

  let documentation = documentation.join("\n\n");
  if !documentation.is_empty() {
    tokens.append_all(quote! {
      #[doc = #documentation]
    });
  }

  let Some(identifier) = specification.get_identifier(key) else {
    return Ok(quote! {});
  };
  let type_identifier = specification.get_type_identifier(key).unwrap();

  if let Some(reference) = &item.reference {
    let reference_identifier = specification.get_identifier(reference);
    tokens.append_all(quote! {
      pub type #identifier = #reference_identifier;
    });

    return Ok(tokens);
  } else if let Some(types) = &item.types {
    if types.len() == 1 {
      let r#type = types.first().unwrap();
      match r#type {
        SchemaType::Never => {
          tokens.append_all(quote! {
            pub type #identifier = ();
          });
        }
        SchemaType::Any => {
          tokens.append_all(quote! {
            pub type #identifier = serde_json::Value;
          });
        }
        SchemaType::Null => {
          tokens.append_all(quote! {
            pub type #identifier = ();
          });
        }
        SchemaType::Boolean => {
          tokens.append_all(quote! {
            pub type #identifier = bool;
          });
        }
        SchemaType::Integer => {
          tokens.append_all(quote! {
            pub type #identifier = i64;
          });
        }
        SchemaType::Number => {
          tokens.append_all(quote! {
            pub type #identifier = f64;
          });
        }
        SchemaType::String => {
          tokens.append_all(quote! {
            pub type #identifier = std::string::String;
          });
        }
        SchemaType::Array => {
          if let Some(tuple_items_keys) = &item.tuple_items {
            let inner_tokens = tuple_items_keys
              .iter()
              .map(|tuple_items_key| {
                let tuple_items_identifier = specification.get_type_identifier(tuple_items_key);

                quote! { #tuple_items_identifier }
              })
              .reduce(|a, b| quote! {#a, #b})
              .unwrap_or_default();

            tokens.append_all(quote! {
              pub type #identifier = (
                #inner_tokens
              );
            });
          } else if let Some(array_items_key) = &item.array_items {
            let array_items_identifier = specification.get_type_identifier(array_items_key);

            tokens.append_all(quote! {
              pub type #identifier = std::vec::Vec<#array_items_identifier>;
            });
          } else {
            tokens.append_all(quote! {
              pub type #identifier = std::vec::Vec<()>;
            });
          }
        }
        SchemaType::Object => {
          if let Some(object_properties_entries) = &item.object_properties {
            let required: HashSet<_> = item
              .required
              .as_ref()
              .map(|value| value.iter().collect())
              .unwrap_or_default();
            let inner_tokens = object_properties_entries
              .iter()
              .map(|(member_name, object_properties_key)| {
                let member_identifier =
                  format_ident!("r#{}", Sentence::new(member_name).to_snake_case());
                let object_properties_identifier =
                  specification.get_type_identifier(object_properties_key);

                if required.contains(member_name) {
                  quote! {
                    pub #member_identifier: #object_properties_identifier
                  }
                } else {
                  quote! {
                    pub #member_identifier: std::option::Option<#object_properties_identifier>
                  }
                }
              })
              .reduce(|a, b| quote! {#a, #b})
              .unwrap_or_default();

            tokens.append_all(quote! {
              #[derive(core::fmt::Debug, serde::Serialize, serde::Deserialize, core::clone::Clone)]
              pub struct #identifier {
                #inner_tokens
              }
            });
          } else if let Some(map_properties_key) = &item.map_properties {
            let map_properties_identifier = specification.get_type_identifier(map_properties_key);

            tokens.append_all(quote! {
              pub type #identifier = std::collections::HashMap<std::string::String, #map_properties_identifier>;
            });
          } else {
            tokens.append_all(quote! {
              pub type #identifier = std::collections::HashMap<std::string::String, ()>;
            });
          }
        }
      };

      let boxed = item
        .types
        .iter()
        .flatten()
        .any(|r#type| *r#type == SchemaType::Object)
        || item.one_of.is_some();

      if boxed {
        tokens.append_all(quote! {
          impl core::convert::From<#type_identifier> for #identifier {
            fn from(value: #type_identifier) -> Self {
                *value.0
            }
          }
        });
      } else {
        tokens.append_all(quote! {
          impl core::convert::From<#type_identifier> for #identifier {
            fn from(value: #type_identifier) -> Self {
                value.0
            }
          }
        });
      }

      return Ok(tokens);
    }
  }

  if let Some(one_of) = &item.one_of {
    let mut inner_tokens = quote! {};
    for sub_key in one_of {
      let sub_identifier = specification.get_identifier(sub_key);
      inner_tokens.append_all(quote! {
          #sub_identifier(#sub_identifier),
      });
    }

    tokens.append_all(quote! {
      #[derive(core::fmt::Debug, serde::Serialize, serde::Deserialize, core::clone::Clone)]
      #[serde(untagged)]
      pub enum #identifier {
        #inner_tokens
      }
    });

    return Ok(tokens);
  }

  tokens.append_all(quote! {
    #[derive(core::fmt::Debug, serde::Serialize, serde::Deserialize, core::clone::Clone)]
    pub struct #identifier();
  });

  Ok(tokens)
}
