import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AddToCart from '../AddToCart/AddToCart';
// import * as api from '../../services/api';

export default class extends Component {
  render() {
    const { data, addToCart, cartItems } = this.props;
    const { title, price, thumbnail, id, shipping: { free_shipping } } = data;
    return (
      <div className="ProductCard" data-testid="product">
        <h3>{title}</h3>
        <img src={thumbnail} alt={title} />
        <p>{price}</p>
        <Link to={`/products/${id}`} data-testid="product-detail-link">
          Detalhes
        </Link>
        <div data-testid="free-shipping">
          {free_shipping ? "Frete Grátis" : null}
        </div>
        <AddToCart
          testid="product-add-to-cart"
          data={data}
          id={id}
          addToCart={addToCart}
          cartItems={cartItems}
        />
      </div>
    );
  }
}
