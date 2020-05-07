import React from 'react'
import '../css/singleProducto.css'

const SingleProducto = (props) => {
    const {imagen,nombre,precio,descripcion}=props.dato;
    if(!imagen)return null;    
    return (
        <div className="info-producto">
            <div className="imagen">
                <img src={`/img/${imagen}.png`} alt={nombre}/>
            </div>
            <div className="info">
                <h2>{nombre}</h2>
                <p className="precio">$ {precio}</p>
                <p>{descripcion}</p>
            </div>
        </div>
    )
}

export default SingleProducto
