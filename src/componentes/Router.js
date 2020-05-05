import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Productos from "./Productos";
import Nosotros from "./Nosotros";
import Error from "./Error";
import infoProducto from '../datos/datos.json'

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
        <Switch>
          <Route exact path="/" render={()=>(
              <Productos
                productos={this.state.productos}
              />
          )} />
          <Route exact path="/nosotros" component={Nosotros} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
