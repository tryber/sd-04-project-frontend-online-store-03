import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import Main from './components/Main/Main';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import ProductDetail from './components/ProductDetail/ProductDetail';
import NotFound from './components/NotFound/NotFound';
import './App.css';

// import PropTypes from 'prop-types';
function arrayUpdateAt(array, index, item) {
  return [...array.slice(0, index), item, ...array.slice(index + 1)];
}

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
    this.changeQuantity = this.changeQuantity.bind(this);
  }

  componentDidMount() {
    const localCartItem = JSON.parse(localStorage.getItem('cartItems'));
    return (localCartItem) ? this.setState({cartItems: localCartItem}) : null;
  }

  componentDidUpdate() {
    const { cartItems } = this.state;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
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

  changeQuantity(signal, product) {
    const { cartItems } = this.state;
    const index = cartItems.findIndex((item) => item.id === product.id);
    if (signal === '+') {
      this.setState({
        cartItems: arrayUpdateAt(cartItems, index, {
          ...cartItems[index],
          quantity: cartItems[index].quantity + 1,
        }),
      });
    } else if (signal === '-') {
      this.setState({
        cartItems: arrayUpdateAt(cartItems, index, {
          ...cartItems[index],
          quantity: cartItems[index].quantity - 1,
        }),
      });
    }
  }

  addToCart(product) {
    const { cartItems } = this.state;
    const index = cartItems.findIndex((item) => item.id === product.id);
    const exists = index >= 0;
    if (!exists) {
      this.setState({ cartItems: [...cartItems, { ...product, quantity: 1 }] });
    } else {
      this.setState({
        cartItems: arrayUpdateAt(cartItems, index, {
          ...cartItems[index],
          quantity: cartItems[index].quantity + 1,
        }),
      });
    }
  }

  render() {
    const {
      filteredProducts,
      couldSet,
      textToSearch,
      categoryId,
      cartItems,
      totalCartItems,
    } = this.state;
    return (
      <BrowserRouter>
        <Header
          setTextToSearch={this.setTextToSearch}
          categoryId={categoryId}
          setfilteredProducts={this.setfilteredProducts}
          cartItems={cartItems}
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
                  cartItems={cartItems}
                />
              )}
            />
            <Route
              exact
              path="/cart"
              render={(props) => (
                <Cart
                  {...props}
                  cartItems={cartItems}
                  changeQuantity={this.changeQuantity}
                  totalCartItems={totalCartItems}
                />
              )}
            />
            <Route
              exact
              path="/checkout"
              render={(props) => <Checkout {...props} cartItems={cartItems} />}
            />
            <Route
              exact
              path="/products/:id"
              render={(props) => (
                <ProductDetail {...props} addToCart={this.addToCart} cartItems={cartItems} />
              )}
            />
            <Route path="/" component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
