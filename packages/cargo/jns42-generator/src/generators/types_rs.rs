use crate::models::Specification;
use jns42_core::models::{ArenaSchemaItem, SchemaType};
use proc_macro2::TokenStream;
use quote::{quote, TokenStreamExt};
use std::error::Error;

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

  tokens.append_all(quote! {
    #[doc = #documentation]
  });

  let Some(identifier) = specification.get_identifier(key) else {
    return Ok(quote! {});
  };

  if let Some(reference) = &item.reference {
    let reference_identifier = specification.get_identifier(reference);
    tokens.append_all(quote! {
      pub type #identifier = #reference_identifier;
    });
  } else {
    let name = specification.get_name(key);
    let interior_name = specification.get_interior_name(key);
    let interior_identifier = specification.get_interior_identifier(key);

    tokens.append_all(quote! {
      #[derive(Debug, serde::Serialize, serde::Deserialize, Clone)]
      #[serde(try_from = #interior_name)]
      pub struct #identifier(pub(super) #interior_identifier);
    });

    tokens.append_all(quote! {
      impl #identifier {
          fn new(value: #interior_identifier) -> Result<Self, crate::errors::ValidationError> {
              let instance = Self(value);
              if instance.validate() {
                  Ok(instance)
              } else {
                  Err(crate::errors::ValidationError::new(#name))
              }
          }
          fn validate(&self) -> bool {
            true
          }
      }
    });

    tokens.append_all(quote! {
      impl TryFrom<#interior_identifier> for #identifier {
        type Error = crate::errors::ValidationError;
        fn try_from(value: #interior_identifier) -> Result<Self, Self::Error> {
            Self::new(value)
        }
      }
    });

    tokens.append_all(quote! {
      impl std::ops::Deref for #identifier {
        type Target = #interior_identifier;
        fn deref(&self) -> &Self::Target {
            &self.0
        }
      }
    });

    if let Some(types) = &item.types {
      if types.len() == 1 {
        let r#type = types.first().unwrap();
        match r#type {
          SchemaType::Boolean | SchemaType::Integer | SchemaType::Number | SchemaType::String => {
            tokens.append_all(quote! {
              impl ToString for #identifier {
                  fn to_string(&self) -> String {
                      self.0.to_string()
                  }
              }
            });
          }
          _ => {}
        };
      }
    }
  }

  Ok(tokens)
}
