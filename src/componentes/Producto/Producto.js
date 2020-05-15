/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import './Producto.css'
import {Link} from 'react-router-dom'

export class Producto extends Component {
    render() {
        const {imagen,nombre,precio,id}=this.props.producto;
        return (
            <li>
                <img src={`img/${imagen}.png`} alt={nombre}/>
                <p>{nombre} <span>$ {precio}</span></p>
                <Link to={`/producto/${id}`}>Más Información</Link>
            </li>
        )
    }
}

export default Producto
