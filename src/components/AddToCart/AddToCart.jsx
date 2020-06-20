import React, { Component } from 'react';
import AddBoxIcon from '@material-ui/icons/AddBox';

export default class extends Component {
  render() {
    const { addToCart, data, id } = this.props;
    const item = {
      ...data,
    };

    return (
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          addToCart(item);
          console.log(item);
        }}
      >
        <AddBoxIcon data-testid="product-add-to-cart" />
        Add to cart
      </button>
    );
  }
}
