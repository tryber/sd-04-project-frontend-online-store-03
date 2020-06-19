import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import * as api from '../../services/api';

export default class extends Component {
  render() {
    const { data, categoryId } = this.props;
    const { title, price, thumbnail, id } = data;
    return (
      <div className="ProductCard" data-testid="product">
        <h3>{title}</h3>
        <img src={thumbnail} alt={title} />
        <p>{price}</p>
        <Link to={`/products/${categoryId}/${id}`} data={data}>Detalhes</Link>
      </div>
    );
  }
}
