import React from 'react';
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

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="row">
        <SideBar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/cart/finish" component={Finish} />
          <Route exact path="/products/:id" component={ProductDetail} />
          <Route path="/" component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
