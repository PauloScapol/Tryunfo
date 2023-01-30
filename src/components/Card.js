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
      <div className="cards-container">
        <header>
          <h2 data-testid="name-card">{ cardName }</h2>
          <h3 className="Card-rarity" data-testid="rare-card">{ cardRare }</h3>
        </header>

        <img
          className="Card-img"
          data-testid="image-card"
          src={ cardImage }
          alt={ cardName }
        />

        <h3
          className="Card-desc-container"
          data-testid="description-card"
        >
          { cardDescription }
        </h3>

        <ul>
          <li data-testid="attr1-card">
            <div className="Card-attr-icon">
              <img src="https://www.shareicon.net/data/256x256/2016/02/21/722716_fist_512x512.png" alt="Poder" height="30px" />
            </div>
            <span className="Card-attr-text">Poder</span>
            <div className="Card-attr-value">{ cardAttr1 }</div>
          </li>
          <li data-testid="attr2-card">
            <div className="Card-attr-icon">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmJuhhHfnETf-AjBI8D4dRt0QJFQHc24412w&usqp=CAU" alt="Alcance" height="30px" />
            </div>
            <span className="Card-attr-text">Alcance</span>
            <div className="Card-attr-value">{ cardAttr2 }</div>
          </li>
          <li data-testid="attr3-card">
            <div className="Card-attr-icon">
              <img src="https://cdn-icons-png.flaticon.com/128/4205/4205494.png" alt="Velocidade" height="30px" />
            </div>
            <span className="Card-attr-text">Velocidade</span>
            <div className="Card-attr-value">{ cardAttr3 }</div>
          </li>
        </ul>

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
