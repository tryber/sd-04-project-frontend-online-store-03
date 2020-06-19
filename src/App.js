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
    };
    this.setfilteredProducts = this.setfilteredProducts.bind(this);
    this.setTextToSearch = this.setTextToSearch.bind(this);
  }

  setfilteredProducts(arrayOfProducts) {
    this.setState({ filteredProducts: arrayOfProducts, couldSet: true });
  }

  setTextToSearch(text) {
    this.setState({ textToSearch: text });
  }

  render() {
    const { filteredProducts, couldSet, textToSearch } = this.state;
    return (
      <BrowserRouter>
        <Header setTextToSearch={this.setTextToSearch} />
        <div className="row">
          <SideBar setfilteredProducts={this.setfilteredProducts} textToSearch={textToSearch} />
          <Switch className="main">
            <Route
              exact
              path="/"
              render={() => <Main filteredProducts={filteredProducts} couldSet={couldSet} />}
            />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/cart/finish" component={Finish} />
            <Route
              exact
              path="/products/:id/:title"
              render={(props) => <ProductDetail {...props} />}
            />
            <Route path="/" component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
