import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useState } from 'react';
import Login from './components/Usuario/Login';
import Registro from './components/Usuario/Registro';
import Home from './components/Producto/Home';
import Cuenta from './components/Producto/Cuenta';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
          <Route path = '/' element= {<Login/>}/>
          <Route path = '/Registro' element= {<Registro/>}/>
          <Route path = '/Home' element= {<Home/>}/>
          <Route path = '/Cuenta' element= {<Cuenta/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;