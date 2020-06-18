import React, { Component } from 'react';

export default class extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    // console.log(this.props);
    // if (this.state.products) {
    //   return (
    //     <div className="main">
    //       {this.state.products.map((item) => (
    //         <h1 key={item.id}>{item.name}</h1>
    //       ))}
    //     </div>
    //   );
    // }
    return <div>Vazio</div>
  }
}
