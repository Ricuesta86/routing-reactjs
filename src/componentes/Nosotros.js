import React, { Component } from 'react'
import '../css/Nosotros.css'

export class Nosotros extends Component {
    render() {
        return (
            <div className="contenedor-nosotros">
                <div className="imagen">
                    <img src="/img/camisa_1.png" alt="imagen nosotros"/>
                </div>
                <div className="contenido">
                    <h2>Sobre Nosotros</h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis velit ab dolorem ad, accusantium quasi possimus ipsa libero dolor rem exercitationem corrupti neque commodi, alias quo sed cum cumque maxime cupiditate quod voluptatum. Dolorum iusto veniam quibusdam fuga incidunt sit perferendis odio beatae saepe maxime reiciendis laboriosam, consectetur doloribus vitae.
                </div>
            </div>
        )
    }
}

export default Nosotros
