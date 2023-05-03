/* eslint-disable react/jsx-max-depth */
import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './App.css';

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
      isCard: false,
      filterValue: '',
      filterRare: '',
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.verifyInputs = this.verifyInputs.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleRareFilterChange = this.handleRareFilterChange.bind(this);
  }

  handleFilterChange(event) {
    this.setState({ filterValue: event.target.value });
  }

  handleRareFilterChange(event) {
    this.setState({ filterRare: event.target.value });
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
      isCard: true,
    };

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
      isCard: false,
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

  deleteCard(removeCard) {
    const { deck } = this.state;
    const temp = deck.filter((card) => card.cardName !== removeCard);
    this.setState({
      deck: temp,
    });

    const trunfoCard = temp.some((card) => (card.cardTrunfo));
    if (trunfoCard) {
      this.setState({
        hasTrunfo: true,
      });
    } else {
      this.setState({
        hasTrunfo: false,
      });
    }
  }

  render() {
    const { deck, filterValue, filterRare } = this.state;
    const filteredDeck = deck.filter((card) => {
      const nameMatch = card.cardName.toLowerCase().includes(filterValue.toLowerCase());
      const rareMatch = filterRare === '' || card
        .cardRare === filterRare;

      return nameMatch && rareMatch;
    });

    return (
      <div className="body">
        <div className="AllButDeck">
          <h1>Tryunfo</h1>
          <section className="FormCardContainer">
            <div className="FormContainer">
              <Form
                { ...this.state }
                onInputChange={ this.onInputChange }
                onSaveButtonClick={ this.onSaveButtonClick }
              />

              <input
                className="name-filter"
                type="text"
                placeholder="Filtrar por nome"
                value={ filterValue }
                onChange={ this.handleFilterChange }
                data-testid="name-filter"
              />

              <select
                className="rare-filter"
                value={ filterRare }
                onChange={ this.handleRareFilterChange }
                data-testid="rare-filter"
              >
                <option value="">Filtrar por raridade</option>
                <option value="normal">normal</option>
                <option value="raro">raro</option>
                <option value="muito raro">muito raro</option>
              </select>

            </div>
            <section className="Card">
              <Card
                { ...this.state }
              />
            </section>
          </section>
        </div>
        <div className="Deck">
          <h2>Seu Deck de Cartas</h2>
          <section className="Deck-container">
            {filteredDeck.map((card) => (
              <Card
                key={ card.cardName }
                { ...card }
                deleteCard={ this.deleteCard }
              />
            ))}
          </section>
        </div>
      </div>
    );
  }
}

export default App;
