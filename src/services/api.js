export async function getCategories() {
  const data = fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((file) => file.json())
    .catch((erro) => console.log(erro));
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const data = fetch(
    `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`,
  )
    .then((file) => file.json())
    .catch((erro) => console.log(erro));
  return data;
}
