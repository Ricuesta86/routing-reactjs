import React, { Component } from 'react'
import Producto from '../Producto/Producto'
import Buscador from '../Buscador/Buscador'

export class Productos extends Component {
    
    render() {
        return (
            <div className="productos">
                <h2>Nuestros Productos</h2>
                <Buscador 
                    busqueda={this.props.busquedaProducto}
                />
                <ul className="lista-productos">
                    {Object.keys(this.props.productos).map(producto=>(
                        <Producto
                            key={producto}
                            producto={this.props.productos[producto]}
                        />
                    ))}
                </ul>
            </div>
        )
    }
}

export default Productos
