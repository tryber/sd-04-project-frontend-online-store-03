import React, { Component } from 'react';
import AddBoxIcon from '@material-ui/icons/AddBox';

export default class extends Component {
  render() {
    const { addToCart, data, id } = this.props;
    const item = {
      ...data,
    };

    return (
      <button type="button" onClick={() => addToCart(item)}>
        <AddBoxIcon />
        Add to cart
      </button>
    );
  }
}
