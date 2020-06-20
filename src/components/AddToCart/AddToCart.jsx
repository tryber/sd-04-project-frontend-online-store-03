import React, { Component } from 'react';
import AddBoxIcon from '@material-ui/icons/AddBox';

export default class extends Component {
  render() {
    return (
    <p>
      <AddBoxIcon data-testid="product-add-to-cart" />
      Add to cart
    </p>
    );
  }
}
