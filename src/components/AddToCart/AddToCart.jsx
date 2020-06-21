import React, { Component } from 'react';
import AddBoxIcon from '@material-ui/icons/AddBox';

export default class extends Component {
  render() {
    const { addToCart, data } = this.props;
    const item = { ...data };

    return (
      <button
        data-testid="product-detail-add-to-cart product-add-to-cart"
        type="button"
        onClick={() => addToCart(item)}
      >
        <AddBoxIcon />
        Add to cart
      </button>
    );
  }
}
