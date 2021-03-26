/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-indent */
/* eslint-disable linebreak-style */
/* eslint-disable no-extra-semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <header> 
        <div className="titulo">Memoria</div>
          <div>
            <button className="boton-reiniciar" onClick={this.props.resetearPartida}>
              Reiniciar
            </button>
        // eslint-disable-next-line react/jsx-indent
        </div>
        <div className="titulo">
          Intentos: {this.props.numeroDeIntentos}
        </div>
      </header>
    );
  // eslint-disable-next-line linebreak-style
  // eslint-disable-next-line linebreak-style
  }
};