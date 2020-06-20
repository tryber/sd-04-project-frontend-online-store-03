import React, { Component } from 'react';
import AddBoxIcon from '@material-ui/icons/AddBox';

function addToCart(data) {
  if (!localStorage.cartItems) localStorage.cartItems = JSON.stringify([]);
  const cartItems = JSON.parse(localStorage.cartItems);
  const updatecartItems = [...cartItems, data];
  localStorage.cartItems = JSON.stringify(updatecartItems);
}

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = { cartItems: { title: '', price: '', quantity: 0 } };
  }

  componentDidMount() {
    // const { title, price } = this.props;
    // this.setState({ cartItems: { title, price, quantity: this.state.quantity } });
  }

  render() {
    // const { data } = this.props;
    const { cartItems } = this.state;
    return (
      <p>
        <AddBoxIcon data-testid="product-add-to-cart" onClick={() => addToCart(cartItems)} />
        Add to cart
      </p>
    );
  }
}
