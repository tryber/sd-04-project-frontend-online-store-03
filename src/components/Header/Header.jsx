import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCart from '@material-ui/icons/ShoppingCart';

export default class extends Component {
  render() {
    return (
      <header className="header">
        <h1>FancyPants Store</h1>
        <Link to="/cart">
          <ShoppingCart
            data-testid="shopping-cart-button"
            fontSize="large"
            style={{ color: 'white' }}
          />
        </Link>
      </header>
    );
  }
}
