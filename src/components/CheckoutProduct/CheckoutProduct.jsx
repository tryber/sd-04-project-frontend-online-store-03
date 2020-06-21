import React, { Component } from 'react';

export default class extends Component {
  render() {
    const { item } = this.props;
    const { price, title, quantity } = item;
    return (
      <div>
        <p data-testid="shopping-cart-product-name">{title}</p>
        <p>{price}</p>
        <p data-testid="shopping-cart-product-quantity">{quantity}</p>
        <p>
          Total: R$
          {price * quantity}
        </p>
      </div>
    );
  }
}
