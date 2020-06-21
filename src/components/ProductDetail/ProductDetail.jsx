import React, { Component } from 'react';
import AddToCart from '../AddToCart/AddToCart';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = { couldRender: false };
  }

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    fetch(`https://api.mercadolibre.com/items/${id}`)
      .then((data) => data.json())
      .then((data) => {
        this.setState({ data, couldRender: true });
      })
      .catch();
  }

  render() {
    const { couldRender } = this.state;
    if (!couldRender) return <div>Loading...</div>;

    const { data } = this.state;
    const { thumbnail, title, price } = data;
    const { match, addToCart } = this.props;
    const { id } = match.params;

    return (
      <div className="main">
        <h1 data-testid="product-detail-name">{title}</h1>
        <img width="150px" height="200px" alt="" src={thumbnail} />
        <span>{price}</span>
        <AddToCart data={data} id={id} addToCart={addToCart} />
      </div>
    );
  }
}
