import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import Main from './components/Main/Main';
import Cart from './components/Cart/Cart';
import Finish from './components/Finish/Finish';
import ProductDetail from './components/ProductDetail/ProductDetail';
import NotFound from './components/NotFound/NotFound';
import './App.css';

// import PropTypes from 'prop-types';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredProducts: [],
      couldSet: false,
      textToSearch: '',
      cartItems: [],
    };
    this.setfilteredProducts = this.setfilteredProducts.bind(this);
    this.setTextToSearch = this.setTextToSearch.bind(this);
    this.setCategoryId = this.setCategoryId.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  setfilteredProducts(arrayOfProducts) {
    this.setState({ filteredProducts: arrayOfProducts, couldSet: true });
  }

  setTextToSearch(text) {
    this.setState({ textToSearch: text });
  }

  setCategoryId(id) {
    this.setState({ categoryId: id });
  }

  addToCart(product) {
    this.setState((state) => {
      const index = state.cartItems.findIndex((item) => item.id === product.id);
      const exists = index >= 0;
      if (!exists) {
        return { cartItems: [...state.cartItems, { ...product, quantity: 1 }] };
      }
      console.log(state.cartItems[index]);
      // return {
      //   cartItems: arrayUpdateAt(state.cartItems, index, {
      //     ...state.cartItems[index],
      //     quantity: state.cartItems[index].quantity + 1,
      //   }),
      // };
    });
  }

  render() {
    const {
      filteredProducts,
      couldSet,
      textToSearch,
      categoryId,
      cartItemsTotal,
      cartItems,
    } = this.state;
    return (
      <BrowserRouter>
        <Header
          setTextToSearch={this.setTextToSearch}
          categoryId={categoryId}
          setfilteredProducts={this.setfilteredProducts}
          cartItemsTotal={cartItemsTotal}
        />
        <div className="row">
          <SideBar
            setfilteredProducts={this.setfilteredProducts}
            textToSearch={textToSearch}
            setCategoryId={this.setCategoryId}
          />
          <Switch className="main">
            <Route
              exact
              path="/"
              render={() => (
                <Main
                  filteredProducts={filteredProducts}
                  couldSet={couldSet}
                  categoryId={categoryId}
                  addToCart={this.addToCart}
                />
              )}
            />
            <Route
              exact
              path="/cart"
              render={(props) => <Cart {...props} cartItems={cartItems} />}
            />
            <Route exact path="/cart/finish" component={Finish} />
            <Route
              exact
              path="/products/:id"
              render={(props) => <ProductDetail {...props} addToCart={this.addToCart} />}
            />
            <Route path="/" component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

function arrayUpdateAt(array, index, item) {
  return [...array.slice(0, index), item, ...array.slice(index + 1)];
}

export default App;
