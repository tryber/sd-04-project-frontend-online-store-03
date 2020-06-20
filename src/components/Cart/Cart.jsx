import React, { Component } from 'react';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = { quantity: 0 };
  }

  render() {
    // const data = localStorage.getItem('cartItem') ? localStorage.getItem('cartItems') : [];
    const { quantity } = this.state;

    if (quantity === 0) {
      return (
        <div className="main">
          <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
        </div>
      );
    }

    return <div />;
    //   {data.map({ title, price, quantity } => {
    //     return
    //       <div key={title}>
    //         <div data-testid="shopping-cart-product-name">{title}</div>
    //         <div>{quantity}</div>
    //         <div>{price}</div>
    //       </div>
    //   })}
    // )
  }
}
