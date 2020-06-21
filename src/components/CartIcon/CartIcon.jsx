import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCart from '@material-ui/icons/ShoppingCart';

export default class extends Component {
  render() {
    return (
      <Link to="/cart" className="flex">
        <ShoppingCart
          data-testid="shopping-cart-button"
          fontSize="large"
          style={{ color: 'white' }}
        />
      </Link>
    );
  }
}
