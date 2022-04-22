import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import { login } from '../Redux/Login/action'
import styled from 'styled-components'

const LoginBox = styled.div`
width: 350px;
height: 300px%;
// border:2px solid green;
margin: auto;
margin-top: 10%;
background-color: rgb(25,118,210);
border-radius: 10px;
padding: 10px;
`

export const Login = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState()
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const {isAuthenticated} = useSelector(state => state.login)

    const handlelogin = () => {
       const userDetails = {
            name,
            email,
            password
        }
        dispatch(login(userDetails))
    }

    if(isAuthenticated){
        return <Navigate to="/"/>
    }

    const  disabled = name.length === 0 || password.length === 0
    
  return (
    <LoginBox>

    <div className='App'>
        <h1>Login</h1>
          
          <label >
            
            <input type="text"
            placeholder='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
          </label>
          <br />
          <br />
          <label >
            
            <input type="text"
            placeholder='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <br />
            <label >
            
            <input type="password"
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            </label>
            <br />
            <br />
            <button disabled={disabled} onClick={handlelogin}>Login</button>
            <hr />
            <p>Don't have an account? <Link to="/signup">Sign up</Link></p>

    </div>
            </LoginBox>
    
  )
}
