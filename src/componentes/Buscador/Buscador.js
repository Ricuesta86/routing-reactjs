import React, { Component } from "react";
import "./Buscador.css";

export class Buscador extends Component {
  leerDatos = (e) => {
    // console.log(e.target.value);
    // Termino de Busqueda
    const termino = e.target.value;

    // enviamos por props
    this.props.busqueda(termino);
  };

  render() {
    return (
      <form className="buscador">
        <input type="text" placeholder="Búsqueda" onChange={this.leerDatos} />
      </form>
    );
  }
}

export default Buscador;
