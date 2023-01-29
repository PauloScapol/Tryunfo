import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      isCard,
      deleteCard,
    } = this.props;

    return (
      <div>
        <h2 data-testid="name-card">{ cardName }</h2>

        <img
          data-testid="image-card"
          src={ cardImage }
          alt={ cardName }
        />

        <h3 data-testid="description-card">{ cardDescription }</h3>

        <h4 data-testid="attr1-card">{ cardAttr1 }</h4>
        <h4 data-testid="attr2-card">{ cardAttr2 }</h4>
        <h4 data-testid="attr3-card">{ cardAttr3 }</h4>

        <h3 data-testid="rare-card">{ cardRare }</h3>

        { cardTrunfo && <span data-testid="trunfo-card">Super Trunfo</span> }

        <div>
          {isCard ? (
            <button
              data-testid="delete-button"
              onClick={ () => deleteCard(cardName) }
            >
              Excluir
            </button>) : ('')}
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.string.isRequired,
  isCard: PropTypes.bool.isRequired,
  deleteCard: PropTypes.func,
};

Card.defaultProps = {
  deleteCard: PropTypes.func,
};

export default Card;
