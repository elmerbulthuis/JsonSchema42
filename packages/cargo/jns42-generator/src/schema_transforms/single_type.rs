use crate::models::{arena::Arena, schema::SchemaNode};
use std::iter::once;

/**
 * This transformer makes the types array into a single type. This is achieved by creating a
 * few new types with a single type and putting them in a oneOf.
 *
 * ```yaml
 * - types:
 *   - number
 *   - string
 * ```
 *
 * will become
 *
 * ```yaml
 * - oneOf:
 *   - 1
 *   - 2
 * - parent: 0
 *   types:
 *   - number
 * - parent: 0
 *   types:
 *   - string
 * ```
 */
pub fn single_type_transform(arena: &mut Arena<SchemaNode>, key: usize) {
  let item = arena.get_item(key);

  if let Some(types) = &item.types {
    match types.len() {
      0 => {
        // if types is empty then we should just set it to None
        let item = SchemaNode {
          types: None,
          ..item.clone()
        };
        arena.set_item(key, item);
      }
      1 => {
        // only one type, this is what we want! let's do nothing
      }
      _ => {
        let item = SchemaNode {
          types: None,
          one_of: Some(
            types
              .clone()
              .into_iter()
              .map(|r#type| {
                arena.add_item(SchemaNode {
                  parent: Some(key),
                  types: Some(once(r#type).collect()),
                  ..Default::default()
                })
              })
              .collect(),
          ),
          ..Default::default()
        };
        arena.set_item(key, item);
      }
    }
  }
}

#[cfg(test)]
mod tests {
  use super::*;
  use crate::models::{
    arena::Arena,
    schema::{SchemaNode, SchemaType},
  };

  #[test]
  fn test_single_type() {
    let mut arena = Arena::new();

    arena.add_item(SchemaNode {
      types: Some(vec![SchemaType::String, SchemaType::Number]),
      ..Default::default()
    });

    arena.apply_transform(single_type_transform);

    let actual: Vec<_> = arena.iter().cloned().collect();
    let expected = vec![
      SchemaNode {
        one_of: Some(vec![1, 2]),
        ..Default::default()
      },
      SchemaNode {
        parent: Some(0),
        types: Some(vec![SchemaType::String]),
        ..Default::default()
      },
      SchemaNode {
        parent: Some(0),
        types: Some(vec![SchemaType::Number]),
        ..Default::default()
      },
    ];

    assert_eq!(actual, expected)
  }
}