/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import '../css/productos.css'

export class Producto extends Component {
    render() {
        const {imagen,nombre,precio}=this.props.producto;
        return (
            <li>
                <img src={`img/${imagen}.png`} alt={nombre}/>
                <p>{nombre} <span>$ {precio}</span></p>
                <a href="#">Más Información</a>
            </li>
        )
    }
}

export default Producto
