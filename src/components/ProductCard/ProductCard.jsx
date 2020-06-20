import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import * as api from '../../services/api';

export default class extends Component {
  render() {
    const { data } = this.props;
    const { title, price, thumbnail, id } = data;
    return (
      <div className="ProductCard" data-testid="product">
        <h3>{title}</h3>
        <img src={thumbnail} alt={title} />
        <p>{price}</p>
        <Link to={`/products/${id}`} data-testid="product-detail-link">Detalhes</Link>
      </div>
    );
  }
}
