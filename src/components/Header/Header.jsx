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

  async setResults(inputValue) {
    const { setfilteredProducts, categoryId, setTextToSearch } = this.props;
    const products = categoryId
      ? await api.getProductsFromCategoryAndQuery(categoryId, inputValue)
      : await api.getProductsFromCategoryAndQuery(undefined, inputValue);

    setfilteredProducts(products.results);
    this.setState({ inputValue: '' });
    setTextToSearch(inputValue);
  }

  render() {
    const { inputValue } = this.state;
    const { setTextToSearch, cartItems } = this.props;
    return (
      <header className="header">
        <h1>FancyPants Store</h1>
        <form>
          <input
            type="text"
            data-testid="query-input"
            value={inputValue}
            onChange={(e) => this.setInputValue(e)}
          />
          <button
            type="button"
            data-testid="query-button"
            onClick={() => {
              setTextToSearch(inputValue);
              this.setResults(inputValue);
            }}
          >
            Buscar
          </button>
        </form>
        <Link to="/cart" className="flex">
          <ShoppingCart
            data-testid="shopping-cart-button"
            fontSize="large"
            style={{ color: 'white' }}
          />
          <div>
            {cartItems.reduce((acc, { quantity }) => acc + quantity, 0)}
          </div>
        </Link>
      </header>
    );
  }
}
