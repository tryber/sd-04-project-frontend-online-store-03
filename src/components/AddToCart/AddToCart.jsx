import React, { Component } from 'react';
import AddBoxIcon from '@material-ui/icons/AddBox';

export default class extends Component {
  render() {
    const { addToCart, data, testid } = this.props;
    const item = { ...data };

    return (
      <button
        data-testid={testid}
        type="button"
        onClick={() => addToCart(item)}
      >
        <AddBoxIcon />
        Add to cart
      </button>
    );
  }
}
