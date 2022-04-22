import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom"
import { signup } from "../redux/signup/action";
import styled from 'styled-components'

const LoginBox = styled.div`
width: 350px;
height: 300px%;
// border:2px solid green;
margin: auto;
margin-top: 10%;
background-color:rgb(25,118,210);
border-radius: 10px;
padding: 10px;
`


export const Signup = ()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [form, setForm] = useState({
       name:"",
       email:"",
       password:"",
       roles:""
    })
    const inputHandle = (e)=>{
         const {value, id} = e.target;
         setForm({...form, [id]:value});
    }

    const handleSubmit = ()=>{
        dispatch(signup({ name:form.name,email:form.email, password:form.password, role:form.roles }))
        navigate("/login")
    }

    const  disabled = form.name.length === 0 || form.password.length === 0 || form.email.length === 0 || form.roles.length === 0;
    return (
        <div className="login">
            <LoginBox>

            <h1>Signup</h1>
            <input onChange={(e)=>{inputHandle(e)}} type="text" name="" id="name" placeholder="name" /> <br /><br />
            <input onChange={(e)=>{inputHandle(e)}} type="text" name="" id="email" placeholder="email"/> <br /> <br />
            <input onChange={(e)=>{inputHandle(e)}} type="text" name="" id="password" placeholder="Password"/> <br /> <br />
            <input onChange={(e)=>{inputHandle(e)}} type="text" name="" id="roles" placeholder="roles"/> <br /> <br />
            <button onClick={()=>{handleSubmit()}}>Signup</button>
            <h3 onClick={()=>navigate("/login")} style={{color:'blue', cursor:"pointer", fontWeight:"400", fontSize:"14px"}}  disabled={disabled}>Already Have Account</h3>
            </LoginBox>
        </div>
    )
}