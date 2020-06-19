import React, { Component } from 'react';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = { cartItems: 0 };
  }

  render() {
    const { cartItems } = this.state;
    if (cartItems === 0) {
      return (
        <div className="main">
          <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
        </div>
      );
    }
    return <div />;
  }
}
