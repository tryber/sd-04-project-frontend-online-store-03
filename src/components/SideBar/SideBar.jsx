import React, { Component } from 'react';
import * as api from '../../services/api';

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      canRenderList: false,
      results: [],
    };
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
        <ul>
          {canRenderList
            ? categories.map((item) => (
                <li key={item.id} id={item.id} onClick={(e) => this.setResults(e.target.id)}>
                  {item.name}
                </li>
              ))
            : null}
        </ul>
      </nav>
    );
  }
}
