export async function getPrismicDocByUID($prismic, type, uid) {
    const doc = await $prismic.api.getByUID(type, uid);
    return doc || null;
}

export async function getChildrenPages($prismic, parentId) {
  const response = await $prismic.api.query(
    $prismic.predicates.at('my.page.parent_page.id', parentId)
  );
  return response.results.map(page => ({
    ...page,
    fullPath: `${page.data.parent_page?.uid}/${page.uid}` // Generates full nested path
  }));
}
