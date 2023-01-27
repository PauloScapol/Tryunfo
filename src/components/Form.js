import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>

          <label htmlFor="name-input">
            Nome
            <input
              name="name-input"
              type="text"
              data-testid="name-input"
            />
          </label>

          <label htmlFor="description-input">
            Descrição
            <input
              name="description-input"
              type="textarea"
              data-testid="description-input"
            />
          </label>

          <label htmlFor="attr1-input">
            Poder
            <input
              name="attr1-input"
              type="number"
              data-testid="attr1-input"
            />
          </label>

          <label htmlFor="attr2-input">
            Precisão
            <input
              name="attr2-input"
              type="number"
              data-testid="attr2-input"
            />
          </label>

          <label htmlFor="attr3-input">
            Velocidade
            <input
              name="attr3-input"
              type="number"
              data-testid="attr3-input"
            />
          </label>

          <label htmlFor="image-input">
            Imagem
            <input
              name="image-input"
              type="text"
              data-testid="image-input"
            />
          </label>

          <label htmlFor="rare-input">
            Raridade
            <select name="rare-input" data-testid="rare-input">
              {/* <option value="vazio">...</option> */}
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>

          <label htmlFor="trunfo-input">
            <input
              name="trunfo-input"
              type="checkbox"
              data-testid="trunfo-input"
            />
            Super Trybe Trunfo
          </label>

          <button data-testid="save-button"> Salvar</button>

        </form>
      </div>
    );
  }
}

export default Form;
