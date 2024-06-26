use crate::models::{ArenaSchemaItem, SchemaArena};

/**
 * Turns the model into a single all-of with various
 * sub compound models in it.
 * This is useful for the rare case in which a schema defines different compounds on a single
 * schema node. So if a schema has an allOf *and* a oneOf. This edge case is handled buy
 * exploding the schema into a schema of allOf with all of the compounds in it.
 *
 * this
 * ```yaml
 * - reference: 10
 * - allOf
 *   - 100
 *   - 200
 * - anyOf
 *   - 300
 *   - 400
 * - oneOf
 *   - 500
 *   - 600
 * - if: 700
 *   then: 800
 *   else: 900
 * ```
 *
 * will become
 * ```yaml
 * - allOf
 *   - 1
 *   - 2
 *   - 3
 *   - 4
 * - reference: 10
 * - allOf
 *   - 100
 *   - 200
 * - anyOf
 *   - 300
 *   - 400
 * - oneOf
 *   - 500
 *   - 600
 * - if: 700
 *   then: 800
 *   else: 900
 *
 * ```
 *
 */
pub fn transform(arena: &mut SchemaArena, key: usize) {
  let item = arena.get_item(key);
  let mut sub_items = Vec::new();

  if item
    .types
    .as_ref()
    .map(|value| value.len())
    .unwrap_or_default()
    > 0
  {
    sub_items.push(ArenaSchemaItem {
      name: item
        .name
        .as_ref()
        .map(|name| name.iter().cloned().chain(["types".to_owned()]).collect()),
      types: item.types.clone(),
      ..Default::default()
    })
  }

  if item.reference.is_some() {
    sub_items.push(ArenaSchemaItem {
      name: item.name.as_ref().map(|name| {
        name
          .iter()
          .cloned()
          .chain(["reference".to_owned()])
          .collect()
      }),
      reference: item.reference,
      ..Default::default()
    })
  }

  if item
    .all_of
    .as_ref()
    .map(|value| value.len())
    .unwrap_or_default()
    > 0
  {
    sub_items.push(ArenaSchemaItem {
      name: item
        .name
        .as_ref()
        .map(|name| name.iter().cloned().chain(["all-of".to_owned()]).collect()),
      all_of: item.all_of.clone(),
      ..Default::default()
    })
  }

  if item
    .any_of
    .as_ref()
    .map(|value| value.len())
    .unwrap_or_default()
    > 0
  {
    sub_items.push(ArenaSchemaItem {
      name: item
        .name
        .as_ref()
        .map(|name| name.iter().cloned().chain(["any-of".to_owned()]).collect()),
      any_of: item.any_of.clone(),
      ..Default::default()
    })
  }

  if item
    .one_of
    .as_ref()
    .map(|value| value.len())
    .unwrap_or_default()
    > 0
  {
    sub_items.push(ArenaSchemaItem {
      name: item
        .name
        .as_ref()
        .map(|name| name.iter().cloned().chain(["one-of".to_owned()]).collect()),
      one_of: item.one_of.clone(),
      ..Default::default()
    })
  }

  if item.r#if.is_some() || item.then.is_some() || item.r#else.is_some() {
    sub_items.push(ArenaSchemaItem {
      name: item.name.as_ref().map(|name| {
        name
          .iter()
          .cloned()
          .chain(["if-then-else".to_owned()])
          .collect()
      }),
      r#if: item.r#if,
      then: item.then,
      r#else: item.r#else,
      ..Default::default()
    })
  }

  if sub_items.len() > 1 {
    let item = item.clone();
    let sub_keys = sub_items
      .into_iter()
      .map(|sub_item| arena.add_item(sub_item))
      .collect();

    arena.replace_item(
      key,
      ArenaSchemaItem {
        types: None,
        reference: None,
        all_of: Some(sub_keys),
        any_of: None,
        one_of: None,
        r#if: None,
        then: None,
        r#else: None,
        ..item
      },
    );
  }
}

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn test_transform() {
    let mut arena = SchemaArena::new();

    arena.add_item(ArenaSchemaItem {
      name: Some(vec!["base".to_owned()]),
      reference: Some(10),
      all_of: Some([100, 200].into()),
      any_of: Some([300, 400].into()),
      one_of: Some([500, 600].into()),
      r#if: Some(700),
      then: Some(800),
      r#else: Some(900),
      ..Default::default()
    });

    while arena.apply_transform(transform) > 0 {
      //
    }

    let actual: Vec<_> = arena.iter().cloned().collect();
    let expected = vec![
      ArenaSchemaItem {
        name: Some(vec!["base".to_owned()]),
        all_of: Some([1, 2, 3, 4, 5].into()),
        ..Default::default()
      },
      ArenaSchemaItem {
        name: Some(vec!["base".to_owned(), "reference".to_owned()]),
        reference: Some(10),
        ..Default::default()
      },
      ArenaSchemaItem {
        name: Some(vec!["base".to_owned(), "all-of".to_owned()]),
        all_of: Some([100, 200].into()),
        ..Default::default()
      },
      ArenaSchemaItem {
        name: Some(vec!["base".to_owned(), "any-of".to_owned()]),
        any_of: Some([300, 400].into()),
        ..Default::default()
      },
      ArenaSchemaItem {
        name: Some(vec!["base".to_owned(), "one-of".to_owned()]),
        one_of: Some([500, 600].into()),
        ..Default::default()
      },
      ArenaSchemaItem {
        name: Some(vec!["base".to_owned(), "if-then-else".to_owned()]),
        r#if: Some(700),
        then: Some(800),
        r#else: Some(900),
        ..Default::default()
      },
    ];

    assert_eq!(actual, expected)
  }
}
