import React,{useState} from 'react'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'
import { useEffect } from 'react'
const Cuenta = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [direccion, setdireccion] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/user/actualizar/${id}`)
        .then((res)=>{
            console.log(res)
            setNombre(res.data.nombre),
            setApellido(res.data.apellido),
            setdireccion(res.data.direccion),
            setCiudad(res.data.ciudad),
            setEmail(res.data.email)
        }).catch((err)=>{
            console.log(err)
        })
    }, [])

    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/user/actualizar/${id}`, {
            nombre, apellido, direccion, ciudad, email
        }, {withCredentials:true})
        .then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }
    return (
        <div className=''>
            <div>
            <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    {/*<svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>*/}
                    <span class="fs-4">Pizza time</span>
                </a>
                <ul class="nav nav-pills">
                    <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">Ordenar</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">Cuenta</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">Cerrar sesión</a></li>
                </ul>
            </header>
            </div>
            <div className='cuenta'>
                <div>
                    <h2 className="h3 mb-3 fw-normal">Actualiza tu información.</h2>
                    <form className="register-form" onSubmit={handleSubmit}>
                        <label htmlFor=""  className=' form-label'>Nombre:</label>
                        <input value={nombre} type="text" className='form-control' onChange={(e) => setNombre(e.target.value)}  required />
                        <label htmlFor=""  className='form-label'>Apellido:</label>
                        <input value={apellido} type="text" className='form-control' onChange={(e) => setApellido(e.target.value)} required />
                        <label htmlFor=""  className=' form-label'>Dirección:</label>
                        <input value={direccion} type="text" className='form-control' onChange={(e) => setdireccion(e.target.value)}  required />
                        <label htmlFor=""  className=' form-label'>Ciudad:</label>
                        <input value={ciudad} type="text" className='form-control' onChange={(e) => setCiudad(e.target.value)}  required />
                        <label htmlFor=""  className='form-label'>Correo electrónico:</label>
                        <input value={email} type="email" className='form-control' onChange={(e) => setEmail(e.target.value)} required />
                        <br></br>
                        <button className='w-20 btn btn-lg btn-primary'> Actualizar</button>
                    </form>
                </div>
                <div>
                    <h2 className="h3 mb-3 fw-normal"> Pedidos anteriores.</h2>
                </div>
            </div>
        </div>
    )
}
export default Cuenta;