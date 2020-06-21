import React, { Component } from 'react';

export default class extends Component {
  render() {
    const { id, price, title, quantity } = this.props.item;
    return (
      <div>
        <p>{title}</p>
        <p>{price}</p>
        <p data-testid="shopping-cart-product-quantity">{quantity}</p>
      </div>
    );
  }
}
