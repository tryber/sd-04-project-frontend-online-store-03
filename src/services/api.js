export async function getCategories() {
  const data = fetch('https://cors-anywhere.herokuapp.com/https://api.mercadolibre.com/sites/MLB/categories').then((file) => file.json());
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  console.log(query);
  const data = fetch(`https://cors-anywhere.herokuapp.com/https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`).then((file) => file.json());
  return data;
}
