import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCart from '@material-ui/icons/ShoppingCart';

export default class extends Component {
  render() {
    return (
      <header className="header">
        <h1>Header aqui</h1>
        <Link to="/cart">
          <ShoppingCart />
        </Link>
      </header>
    );
  }
}
