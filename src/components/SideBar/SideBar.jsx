import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../../services/api';

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = { canRenderList: false };
  }

  componentDidMount() {
    const callGetCategories = async () => {
      const data = await api.getCategories();
      this.setState({
        categories: data,
        canRenderList: true,
      });
    };
    callGetCategories();
  }

  async setResults(id) {
    const { setfilteredProducts } = this.props;
    const products = await api.getProductsFromCategoryAndQuery(id);
    setfilteredProducts(products.results);
  }

  render() {
    const { categories, canRenderList } = this.state;
    return (
      <nav className="nav">
        {canRenderList
          ? categories.map((item) => (
            <Link to="/" key={item.id} id={item.id} onClick={(e) => this.setResults(e.target.id)}>
              {item.name}
            </Link>
          ))
          : null}
      </nav>
    );
  }
}
