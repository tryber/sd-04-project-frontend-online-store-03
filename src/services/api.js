import React from 'react';
import { fetch } from 'node-fetch';

export async function getCategories() {
  // implement here
  // return fetch('https://api.mercadolibre.com/sites/MLB/categories')
  // .then(data => data.json())
  // .then(datajson => console.log(datajson))
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // implement here
}
