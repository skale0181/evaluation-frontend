import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom"
import { signup } from "../redux/signup/action";
import Button from "@mui/material/Button";
import styled from 'styled-components';

const Input = styled.input`
padding: 5px;
border-radius: 3px;
margin: 5px;
`
const LoginBox = styled.div`
width: 350px;
height: 300px%;
// border:2px solid green;
margin: auto;
margin-top: 10%;
background-color:#f5f5f5;
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
        dispatch(signup({ name:form.name,email:form.email, password:form.password, roles:form.roles }))
        navigate("/login")
    }

    const  disabled = form.name.length === 0 || form.password.length === 0 || form.email.length === 0 || form.roles.length === 0;
    return (
        <div className="login" style={{marginBottom:"20px"}}>
            <LoginBox>

            <h1>Signup</h1>
            <Input onChange={(e)=>{inputHandle(e)}} type="text" name="" id="name" placeholder="name" /> <br /><br />
            <Input onChange={(e)=>{inputHandle(e)}} type="text" name="" id="email" placeholder="email"/> <br /> <br />
            <Input onChange={(e)=>{inputHandle(e)}} type="text" name="" id="password" placeholder="Password"/> <br /> <br />
            <Input onChange={(e)=>{inputHandle(e)}} type="text" name="" id="roles" placeholder="roles"/> <br /> <br />
            <Button  style={{margin: "5px"}} variant="contained" color="primary" disabled={disabled} onClick={()=>{handleSubmit()}}>Signup</Button>
            <hr />
            <h3 onClick={()=>navigate("/login")} style={{color:'blue', cursor:"pointer", fontWeight:"400", fontSize:"14px"}}  disabled={disabled}>Already Have Account</h3>
            </LoginBox>
        </div>
    )
}