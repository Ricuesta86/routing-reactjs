import React from 'react'
import './Contacto.css'

const Contacto = () => {
    return (
        <div>            
            <form>
                <legend>Formulario de Contacto</legend>
                <div className="input-field">
                    <label htmlFor="nombre">Tu Nombre:</label>
                    <input type="text" id="nombre" placeholder="Tu Nombre"/>
                </div>
                <div className="input-field">
                    <label htmlFor="email">Tu Email:</label>
                    <input type="email" id="email" placeholder="Tu Email"/>
                </div>
                <div className="input-field">
                    <label htmlFor="mensaje">Mensaje:</label>
                    <textarea id="mensaje"></textarea>
                </div>
                <div className="input-field enviar">
                    <input type="submit" value="Enviar"/>
                </div>
            </form>
        </div>
    )
}

export default Contacto
