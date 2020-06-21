import React, { Component } from 'react';
import AddToCart from '../AddToCart/AddToCart';

function addEvaluation() {
  const evaluationToSend = document.querySelector('#evaluation').value;
  const evaluationSended = document.querySelector('#evaluation-sended');
  const comment = document.createElement('li');
  comment.innerHTML = evaluationToSend;
  evaluationSended.appendChild(comment);
}

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = { couldRender: false };
  }

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    fetch(`https://api.mercadolibre.com/items/${id}`)
      .then((data) => data.json())
      .then((data) => {
        this.setState({ data, couldRender: true });
      })
      .catch();
  }


  render() {
    const { couldRender } = this.state;
    if (!couldRender) return <div>Loading...</div>;

    const { data } = this.state;
    const { thumbnail, title, price } = data;
    const { match, addToCart } = this.props;
    const { id } = match.params;

    return (
      <div>
        <h1 data-testid="product-detail-name">{title}</h1>
        <img width="150px" height="200px" alt="" src={thumbnail} />
        <span>{price}</span>
        <AddToCart data={data} id={id} addToCart={addToCart} />
        <form>
          <textarea
            data-testid="product-detail-evaluation"
            placeholder="Deixe seus comentários"
            id="evaluation"
          />
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              addEvaluation();
            }}
          >
            Enviar
          </button>
        </form>
        <ul id="evaluation-sended" />
      </div>
    );
  }
}
