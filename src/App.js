/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable no-alert */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable linebreak-style */
import React, { Component } from "react";
// eslint-disable-next-line linebreak-style
import Header from "./Header";
import Tablero from "./Tablero";
import "./App.css";
import Baraja from "./components/Baraja";
import "./style.css";

const getEstadoInicial = () => {
  const baraja = Baraja();
  return {
    baraja,
    parejaSeleccionada: [],
    estaComparando: false,
    numeroDeIntentos: 0,
  };
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = getEstadoInicial();
  }

  // eslint-disable-next-line react/sort-comp
  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <div className="App">
        <Header
          numeroDeIntentos={this.state.numeroDeIntentos}
          resetearPartida={() => this.resetearPartida()}
        />
        <Tablero
          baraja={this.state.baraja}
          parejaSeleccionada={this.state.parejaSeleccionada}
          seleccionarCarta={(carta) => this.seleccionarCarta(carta)}
        />
      </div>
    );
  }

  seleccionarCarta(carta) {
    if (
      this.state.estaComparando
      || this.state.parejaSeleccionada.indexOf(carta) > -1
      || carta.fueAdivinida
    ) {
      return;
    }

    const parejaSeleccionada = [...this.state.parejaSeleccionada, carta];
    this.setState({
      parejaSeleccionada,
    });

    if (parejaSeleccionada.length === 2) {
      this.compararPareja(parejaSeleccionada);
    }
  }

  compararPareja(parejaSeleccionada) {
    this.setState({ estaComparando: true });

    setTimeout(() => {
      const [primeraCarta, segundaCarta] = parejaSeleccionada;
      let { baraja } = this.state;

      if (primeraCarta.icono === segundaCarta.icono) {
        baraja = baraja.map((carta) => {
          if (carta.icono !== primeraCarta.icono) {
            return carta;
          }

          return { ...carta, fueAdivinada: true };
        });
      }

      this.verificarSiHayGanador(baraja);
      this.setState({
        parejaSeleccionada: [],
        baraja,
        estaComparando: false,
        // eslint-disable-next-line react/no-access-state-in-setstate
        numeroDeIntentos: this.state.numeroDeIntentos + 1,
      });
    }, 1000);
  }

  verificarSiHayGanador(baraja) {
    if (
      baraja.filter((carta) => !carta.fueAdivinada).length === 0
    ) {
      // eslint-disable-next-line react/destructuring-assignment
      alert(`Ganaste en ${this.state.numeroDeIntentos} intentos!`);
    }
  }

  resetearPartida() {
    this.setState(
      getEstadoInicial(),
    );
  }
}

// eslint-disable-next-line linebreak-style
export default App;
