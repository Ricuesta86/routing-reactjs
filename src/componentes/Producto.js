import React, { Component } from 'react'

export class Producto extends Component {
    render() {
        return (
            <div>
                Hola desde producto {this.props.producto.id}
            </div>
        )
    }
}

export default Producto
