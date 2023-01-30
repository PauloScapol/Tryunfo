import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    const attrMax = 210;

    return (
      <div>
        <form className="CreateCardForm">

          <label htmlFor="name-input">
            Nome
            <input
              className="name"
              name="cardName"
              type="text"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="description-input">
            Descrição
            <input
              className="desc"
              name="cardDescription"
              type="textarea"
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>

          <label className="label-attr" htmlFor="attr1-input">
            <div className="attr-icon">
              <img src="https://www.shareicon.net/data/256x256/2016/02/21/722716_fist_512x512.png" alt="Poder" height="30px" />
            </div>
            Poder
            <input
              className="attr"
              name="cardAttr1"
              type="number"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
              min="0"
              max="90"
            />
          </label>

          <label className="label-attr" htmlFor="attr2-input">
            <div className="attr-icon">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmJuhhHfnETf-AjBI8D4dRt0QJFQHc24412w&usqp=CAU" alt="Alcance" height="30px" />
            </div>
            Alcance
            <input
              className="attr"
              name="cardAttr2"
              type="number"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
              min="0"
              max="90"
            />
          </label>

          <label className="label-attr" htmlFor="attr3-input">
            <div className="attr-icon">
              <img src="https://cdn-icons-png.flaticon.com/128/4205/4205494.png" alt="Velocidade" height="30px" />
            </div>
            Velocidade
            <input
              className="attr"
              name="cardAttr3"
              type="number"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
              min="0"
              max="90"
            />
          </label>

          <span
            className="remaining-pts"
          >
            Pontos Restantes:
            {attrMax - (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3))}
          </span>

          <label htmlFor="image-input">
            Imagem
            <input
              placeholder="URL da imagem"
              className="image"
              name="cardImage"
              type="text"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="rare-input">
            Raridade
            <select
              className="rare"
              name="cardRare"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>

          {hasTrunfo ? 'Você já tem um Super Trunfo em seu baralho' : (
            <label className="label-trunfo" htmlFor="trunfo-input">
              <div className="trunfo-icon">
                <img src="https://staticdelivery.nexusmods.com/mods/3174/images/thumbnails/85/85-1585932190-669867691.png" alt="Golden Arrow" height="30px" />
              </div>
              <input
                name="cardTrunfo"
                type="checkbox"
                data-testid="trunfo-input"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />
              Super Trybe Trunfo
            </label>
          )}

          <button
            className="save-button"
            name="btnSalvar"
            data-testid="save-button"
            type="submit"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>

        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
