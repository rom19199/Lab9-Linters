/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-props-no-multi-spaces */
/* eslint-disable react/jsx-max-props-per-line */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable react/jsx-closing-bracket-location */
// eslint-disable-next-line linebreak-style
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-first-prop-new-line */
/* eslint-disable react/prop-types */
/* eslint-disable space-infix-ops */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-equals-spacing */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable semi */
/* eslint-disable comma-dangle */
/* eslint-disable object-curly-spacing */
import React, {Component} from 'react';
import './Carta.css';
import ReactCardFlip from 'react-card-flip';

export default class Carta extends Component {
  constructor() {
    super();
      this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <div className="carta" onClick ={this.props.seleccionarCarta}>

        <ReactCardFlip isFlipped={this.props.estaSiendoComparada ||this.props.fueAdivinada} flipDirection="vertical"
      
        // eslint-disable-next-line react/prop-types
        // eslint-disable-next-line react/jsx-indent-props
        flipped={this.props.estaSiendoComparada || this.props.fueAdivinada}
        // eslint-disable-next-line react/jsx-boolean-value
        // eslint-disable-next-line react/jsx-indent-props
        // eslint-disable-next-line react/jsx-boolean-value
        disabled={true}
        // eslint-disable-next-line react/jsx-no-comment-textnodes
        >
          

        // eslint-disable-next-line react/jsx-first-prop-new-line
        <div className="portada"
          // eslint-disable-next-line react/jsx-no-comment-textnodes
          onClick={this.handleClick} />
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div className="contenido" onClick={this.handleClick}>
          <i className={`fa ${this.props.icono} fa-5x`} />
           
        </div>
       
        </ReactCardFlip>
      </div>
     
    )
  // eslint-disable-next-line linebreak-style
  // eslint-disable-next-line linebreak-style
  }
// eslint-disable-next-line no-extra-semi
};
