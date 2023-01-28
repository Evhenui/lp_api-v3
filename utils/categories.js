export const categoryFlatten = (categories, parent = undefined) => {
  return categories.reduce((result, item) => {
    item.parentSlug = parent;
    return [...result, item, ...categoryFlatten(item.children, item.slug)];
  }, []);
};

export const categoryHeader = (categories, parentId) => {
  const result = [];

  categories.forEach((item) => {
    const image = item.images.find((el) => el.type === 'icon');

    const menuItem = {
      id: item.id,
      name: item.name,
      img: image?.url,
      parentId: parentId,
      slug: item.slug,
    };

    if (item.children?.length) {
      menuItem.children = categoryHeader(item.children, item.id);
    }

    result.push(menuItem);
  });

  return result;
};

export const categoryFormatted = (categories) => {
  const result = [];

  categories.forEach((item) => {
    const icon = item.images.find((el) => el.type === 'icon');
    const tile = item.images.find((el) => el.type === 'tile');

    const content = item.contents.reduce((acc, el) => {
      acc[el.type] = el.body;
      return acc;
    }, {});

    const categoryItem = {
      id: item.id,
      name: item.name,
      slug: item.slug,
      icon: icon?.url,
      tile: tile?.url,
      ...content,
    };

    if (item.children?.length) {
      categoryItem.children = categoryFormatted(item.children);
    }

    result.push(categoryItem);
  });

  return result;
};
