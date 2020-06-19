import React, { Component } from 'react';

export default class extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`https://api.mercadolibre.com/items/${id}`)
    .then((data) => data.json())
    .then((data) => this.setState({ data }))
    .catch();
  }
  render() {
    return (
      <div className="main">
        <h1>Product Details</h1>
      </div>
    );
  }
}
