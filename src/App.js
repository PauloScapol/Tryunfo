import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      deck: [],
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.verifyInputs = this.verifyInputs.bind(this);
  }

  onInputChange({ target }) {
    const { name, value, checked } = target;

    if (target.name === 'cardTrunfo') {
      this.setState({
        hasTrunfo: true,
      });
    }

    const valor = target.type === 'checkbox' ? checked : value;
    this.setState({
      [name]: valor,
    }, () => this.verifyInputs());
  }

  onSaveButtonClick() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    } = this.state;

    const newCard = {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    }

    this.setState((previous) => ({
      deck: [...previous.deck, newCard],
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: true,
      isSaveButtonDisabled: true,
    }));
  }

  verifyInputs() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const maxAttr = 90;
    const maxAttrSum = 210;

    if (cardName === '' || cardDescription === '' || cardImage === ''
      || Number(cardAttr1) > maxAttr
      || Number(cardAttr2) > maxAttr
      || Number(cardAttr3) > maxAttr
      || Number(cardAttr1) < 0 || Number(cardAttr2) < 0 || Number(cardAttr3) < 0
      || Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) > maxAttrSum
    ) {
      this.setState({
        isSaveButtonDisabled: true,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: false,
      });
    }
  }

  render() {
    const { deck } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          { ...this.state }
        />
        <h2>Seu Deck de Cartas</h2>
        {deck.map((card) => (
          <Card key={ card.cardName } { ...card }/>
        ))}
      </div>
    );
  }
}

export default App;
