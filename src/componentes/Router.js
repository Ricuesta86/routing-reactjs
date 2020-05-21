import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './Header/Header'
import Navegacion from './Navegacion/Navegacion'
import Productos from "./Productos/Productos";
import Nosotros from "./Nosotros/Nosotros";
import Error from "./Error/Error";
import infoProducto from '../datos/datos.json'
import SingleProducto from "./SingleProducto/SingleProducto";
import Contacto from './Contacto/Contacto'

export class Router extends Component {
    state={
        productos:[],
        terminoBusqueda:''
    }
    
    componentWillMount(){
        this.setState({
            productos:infoProducto
        })
        // console.log(this.state.productos);        
    }

    busquedaProducto=(busqueda)=>{
      if(busqueda.length>3){
        this.setState({
          terminoBusqueda:busqueda
        })
      }else{
        this.setState({
          terminoBusqueda:''
        })
      }
    }

  render() {

    let productos=[...this.state.productos];
    let busqueda=this.state.terminoBusqueda;
    let resultado;

    if(busqueda !== ''){
      resultado=productos.filter(producto=>(
        producto.nombre.toLowerCase().indexOf( busqueda.toLowerCase() ) !== -1
      ))
      // console.log('no esta vacio');      
    }else{
      resultado=productos;
    }

    return (
      <BrowserRouter>
        <div className="contenedor">
          <Header />
          <Navegacion />
            <Switch>
              <Route exact path="/" render={()=>(
                  <Productos
                    productos={resultado}
                    busquedaProducto={this.busquedaProducto}
                  />
              )} />
              <Route exact path="/nosotros" component={Nosotros} />
              <Route exact path="/productos" render={()=>(
                  <Productos
                    productos={resultado}
                    busquedaProducto={this.busquedaProducto}
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
