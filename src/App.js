import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import Main from './components/Main/Main';

// import PropTypes from 'prop-types'; 

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="row">
        <SideBar />
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
