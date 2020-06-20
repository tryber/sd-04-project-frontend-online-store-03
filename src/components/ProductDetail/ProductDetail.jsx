import React, { Component } from 'react';
import AddToCart from '../AddToCart/AddToCart';
import CartIcon from '../CartIcon/CartIcon';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = { data: {} };
  }

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    fetch(`https://api.mercadolibre.com/items/${id}`)
      .then((data) => data.json())
      .then((data) => {
        this.setState({ ...data });
      })
      .catch();
  }

  render() {
    const { thumbnail, title, price } = this.state;
    return (
      <div className="main">
        <h1 data-testid="product-detail-name">{title}</h1>
        <img width="150px" height="200px" alt="" src={thumbnail} />
        <span>{price}</span>
        <AddToCart data={this.state} />
        <CartIcon />
      </div>
    );
  }
}
