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
    this.state = { filteredProducts: [] };
    this.setfilteredProducts = this.setfilteredProducts.bind(this);
  }

  setfilteredProducts(arrayOfProducts) {
    this.setState({ filteredProducts: arrayOfProducts });
  }

  render() {
    const { filteredProducts } = this.state;
    return (
      <BrowserRouter>
        <Header />
        <div className="row">
          <SideBar setfilteredProducts={this.setfilteredProducts} />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Main filteredProducts={filteredProducts} />}
            />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/cart/finish" component={Finish} />
            <Route exact path="/products/:id" component={ProductDetail} />
            <Route path="/" component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
