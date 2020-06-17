import React, { Component } from 'react';
import * as api from '../../services/api';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = { canRenderList: false };
  }

  async componentDidMount() {
    const data = await api.getCategories();
    // console.log(data)
    const cat = await api.getProductsFromCategoryAndQuery('MLB5672');
    console.log(cat);
    this.setState({
      categories: data,
      canRenderList: true,
    });
  }

  render() {
    const { categories, canRenderList } = this.state;
    return (
      <nav>
        <ul>
          {canRenderList ? categories.map((item) => <li key={item.id}>{item.name}</li>) : null}
          <li>Categoria1</li>
          <li>Categoria2</li>
          <li>Categoria3</li>
          <li>Categoria4</li>
        </ul>
      </nav>
    );
  }
}
