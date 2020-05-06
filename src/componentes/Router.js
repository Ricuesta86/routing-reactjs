import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './Header'
import Productos from "./Productos";
import Nosotros from "./Nosotros";
import Error from "./Error";
import infoProducto from '../datos/datos.json'
import SingleProducto from "./SingleProducto";

export class Router extends Component {
    state={
        productos:[]
    }

    componentDidMount(){
        this.setState({
            productos:infoProducto
        })
    }

  render() {
    return (
      <BrowserRouter>
        <div className="contenedor">
          <Header />
            <Switch>
              <Route exact path="/" render={()=>(
                  <Productos
                    productos={this.state.productos}
                  />
              )} />
              <Route exact path="/nosotros" component={Nosotros} />
              <Route exact path="/producto/:idproducto" render={(props)=>{
                  let productoId = props.location.pathname.replace('/producto/','');
                  return(
                    <SingleProducto
                      producto = {this.state.productos[productoId]}
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
