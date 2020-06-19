import React, { Component } from 'react';

export default class extends Component {
  render() {
    const { filteredProducts, couldSet } = this.props;

    if (!couldSet) {
      return (
        <div data-testid="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria.</div>
      );
    }

    return (
      <div className="main">
        {filteredProducts.map((item) => (
          <p key={item.id}>{item.title}</p>
        ))}
      </div>
    );
  }
}
