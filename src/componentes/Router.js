import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './Header'
import Navegacion from './Navegacion'
import Productos from "./Productos";
import Nosotros from "./Nosotros";
import Error from "./Error";
import infoProducto from '../datos/datos.json'
import SingleProducto from "./SingleProducto";

export class Router extends Component {
    state={
        productos:[]
    }
    
    componentWillMount(){
        this.setState({
            productos:infoProducto
        })
        // console.log(this.state.productos);        
    }

  render() {
    return (
      <BrowserRouter>
        <div className="contenedor">
          <Header />
          <Navegacion />
            <Switch>
              <Route exact path="/" render={()=>(
                  <Productos
                    productos={this.state.productos}
                  />
              )} />
              <Route exact path="/nosotros" component={Nosotros} />
              <Route exact path="/productos" render={()=>(
                  <Productos
                    productos={this.state.productos}
                  />
              )} />
              <Route exact path="/contacto" component={Contacto} />
              <Route exact path="/producto/:idproducto" render={(props)=>{
                  let idProducto = props.location.pathname.replace('/producto/','');
                  return(
                    <SingleProducto 
                      dato={this.state.productos[idProducto]}
                    />
                  )
                }
              } />
              <Route component={Error} />
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
