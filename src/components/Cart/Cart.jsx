import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import InCartItem from '../InCartItem/InCartItem';

export default class extends Component {
  render() {
    const { cartItems, changeQuantity } = this.props;
    if (cartItems.length === 0) {
      return (
        <div className="main">
          <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
        </div>
      );
    }
    return (
      <div>
        <div className="cart-item">
          {cartItems.map((item) => (
            <InCartItem key={item.id} item={item} changeQuantity={changeQuantity} />
          ))}
        </div>
        <div>
          <div data-testid="shopping-cart-product-quantity">
            Total:
            {cartItems.reduce((acc, { quantity }) => acc + quantity, 0)}
          </div>
          <Link to="/checkout">
            <button type="button">Finalizar Compra</button>
          </Link>
        </div>
      </div>
    );
  }
}
