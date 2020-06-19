import React, { Component } from 'react';
import ProductCard from '../ProductCard/ProductCard';

export default class extends Component {
  render() {
    const { filteredProducts, couldSet } = this.props;

    if (!couldSet) {
      return (
        <div data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </div>
      );
    }

    return (
      <div className="main">
        {filteredProducts.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    );
  }
}
