import React, { Component } from 'react';
// import  { getCategories } from '../../services/api.js';

export default class extends Component {
  render() {
    // getCategories();
    return (
      <nav>
        <ul>
          <li>Categoria1</li>
          <li>Categoria2</li>
          <li>Categoria3</li>
          <li>Categoria4</li>
        </ul>
      </nav>
    )
  }
}