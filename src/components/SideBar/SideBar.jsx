import React, { Component } from 'react';
import * as api from '../../services/api';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = { canRenderList: false };
  }

  componentDidMount() {
    const setStateInside = async () => {
      const data = await api.getCategories();
      const cat = await api.getProductsFromCategoryAndQuery('MLB5672');
      this.setState({
        categories: data,
        canRenderList: true,
      });
      console.log(cat);
    };
    setStateInside();
  }

  render() {
    const { categories, canRenderList } = this.state;
    return (
      <nav>
        <ul>
          {canRenderList ? categories.map((item) => <li key={item.id}>{item.name}</li>) : null}
        </ul>
      </nav>
    );
  }
}
