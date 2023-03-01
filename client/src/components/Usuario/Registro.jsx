import React, { useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const Registro = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [direccion, setdireccion] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate()


    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/register', {
            nombre, apellido, direccion, ciudad, email, password, confirmPassword
        }, {withCredentials:true})
        .then((res)=>{
            console.log(res)
            navigate('/home')
        }).catch((err)=>{
            console.log(err)
        })
    }
    const irALogin = (e) => {
        navigate('/');
    }

    return (
        <div className="" >
            <div className='Header-usuario'>
                <div>
                    <h1>Pizza Time</h1>
                </div>
                <div className="footer">
                    <a style={{ marginLeft: '10px' }} type="text" onClick={irALogin} color="primary">Ya tienes una cuenta?, Login!</a>
                </div>
            </div>
            <h2 className="h3 mb-3 fw-normal">Registrarte.</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor=""  className=' form-label'>Nombre:</label>
            <input value={nombre} type="text" className='form-control' onChange={(e) => setNombre(e.target.value)} placeholder="Ingrese su nombre." required />
            <label htmlFor=""  className='form-label'>Apellido:</label>
            <input value={apellido} type="text" className='form-control' onChange={(e) => setApellido(e.target.value)} placeholder="Ingrese su apellido."required />
            <label htmlFor=""  className=' form-label'>Dirección:</label>
            <input value={direccion} type="text" className='form-control' onChange={(e) => setdireccion(e.target.value)} placeholder="Ingrese su dirección." required />
            <label htmlFor=""  className=' form-label'>Ciudad:</label>
            <input value={ciudad} type="text" className='form-control' onChange={(e) => setCiudad(e.target.value)} placeholder="Ingrese su ciudad." required />
            <label htmlFor=""  className='form-label'>Correo electrónico:</label>
            <input value={email} type="email" className='form-control' onChange={(e) => setEmail(e.target.value)} placeholder="Ingrese su correo electrónico."required />
            <label htmlFor=""  className='form-label'>Contraseña:</label>
            <input value={password} className='form-control' type="password"onChange={(e) => setPassword(e.target.value)}  placeholder="********" required  />
            <label htmlFor=""  className='form-label'>Confirmar contraseña: </label>
            <input value={confirmPassword} className='form-control' type="password" onChange={(e) => setConfirmPassword(e.target.value)} placeholder="********" required  />
            <br></br>
            <button className='w-20 btn btn-lg btn-primary'> Registrarte</button>
        </form>
    </div>
    )
}
export default Registro;