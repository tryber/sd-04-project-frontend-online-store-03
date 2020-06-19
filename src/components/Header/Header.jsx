import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import * as api from '../../services/api';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '' };
  }

  setInputValue(e) {
    e.preventDefault();
    this.setState({ inputValue: e.target.value });
  }

  async setResults() {
    const { setfilteredProducts, textToSearch, categoryId } = this.props;
    const products = await api.getProductsFromCategoryAndQuery(categoryId, textToSearch);

    setfilteredProducts(products.results);
  }

  render() {
    const { inputValue } = this.state;
    const { setTextToSearch } = this.props;

    return (
      <header className="header">
        <h1>FancyPants Store</h1>
        <form>
          <input
            type="text" data-testid="query-input" value={inputValue}
            onChange={(e) => this.setInputValue(e)}
          />
          <button
            type="button" data-testid="query-button"
            onClick={() => {
              setTextToSearch(inputValue);
              this.setResults();
            }}
          >
            Buscar
          </button>
        </form>
        <Link to="/cart">
          <ShoppingCart
            data-testid="shopping-cart-button" fontSize="large"
            style={{ color: 'white' }}
          />
        </Link>
      </header>
    );
  }
}
