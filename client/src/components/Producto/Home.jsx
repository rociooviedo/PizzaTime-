import React,{useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate();

  const irAHome = (e) => {
    navigate('/Home');
  }
  const irACuenta = (e) => {
    navigate('/Cuenta');
  }
  const irAOrdenar = (e) => {
    navigate('/Ordenar');
  }
  const irACerrarsesion = (e) => {
    navigate('/Registro');
  }
  return (
    <div>
      <div>
        <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            {/*<svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>*/}
            <span class="fs-4">Pizza time</span>
          </a>
          <ul class="nav nav-pills">
            <li class="nav-item"><a href="#" onClick={irAHome} class="nav-link active" aria-current="page">Home</a></li>
            <li class="nav-item"><a href="#" onClick={irAOrdenar} class="nav-link">Ordenar</a></li>
            <li class="nav-item"><a href="#" onClick={irACuenta} class="nav-link">Cuenta</a></li>
            <li class="nav-item"><a href="#" onClick={irACerrarsesion} class="nav-link">Cerrar sesión</a></li>
          </ul>
        </header>
      </div>
    </div>
  )
}
export default Home;

