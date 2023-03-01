

import React,{useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Login = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const navigate = useNavigate()

    const submitHandler = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/login', {
            email, password
        }, {withCredentials:true, credentials:'include'})
        .then((res)=>{
            console.log(res)
            navigate('/Home')
        }).catch((err)=>{
            console.log(err)
        })
    }

    const irARegistro = (e) => {
        navigate('/Registro');
    }

    return (
        <div className="login">
            <div className='Header-usuario'>
                <div>
                    <h1>Pizza Time</h1>
                </div>
                <div className="footer">
                    <a style={{ marginLeft: '10px' }} type="text" onClick={irARegistro} color="primary">Aún no tienes una cuenta? Regístrate!</a>
                </div>
            </div>
            <form onSubmit={submitHandler} className='col-6 mx-auto'>   
                <label htmlFor="" className='form-label'>Email:</label>
                <input type="text" className='form-control'onChange={(e)=>setEmail(e.target.value)}/>   
                <label htmlFor="" className='form-label'> Password</label>
                <input type="password" className='form-control'onChange={(e)=>setPassword(e.target.value)}/>
                <button className='btn btn-success mt-3'> Login</button>
            </form>
        </div>
    )
}

export default Login