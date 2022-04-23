import axios from 'axios';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Button from "@mui/material/Button";
import styled from 'styled-components';

const Input = styled.input`
padding: 5px;
border-radius: 3px;
margin: 5px;
`
const Formdiv = styled.div`
     background-color: #f5f5f5;
        width: 400px;
        border-radius: 10px;
        padding: 10px;
        margin: auto;
        margin-top: 10%;
        `

export const AddTeachers = () => {
    const [data, setData] = React.useState({   });
    
    //--------teachers data----------------------
    const [name, setName] = React.useState("");
    const [age, setAge] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [gender,setGender] = useState("")
    const [ids, setIds] = React.useState([]);


    const handleChange = (e) => {
       var {id,value} = e.target;
         setData({...data, [id]:value});
    };

    const token = useSelector((store)=>store.login.token);
    // console.log(token)
    const handleSubmit = (e)=>{
        e.preventDefault(); 
       
        fetch('https://scholmybackend.herokuapp.com/classes', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        "Authorization": "Bearer " + token
                    }
                    , body: JSON.stringify(data)
                }).then((res) => {
                    res.json()
                    .then((data) => {
                        console.log(data); 
                        setIds([...ids,data._id]); 
                    })
                })
                .catch((err) => {
                    console.log(err.message);   
                    
                })
    }

    const handleAdd = ()=>{
        const payload={
            name,
            email,
            gender,
            age,
            class_id:ids
        }
        fetch('https://scholmybackend.herokuapp.com/teachers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + token
            }
            , body: JSON.stringify(payload)
        }).then((res) => {
            res.json()
            .then((data) => {
                console.log(data); 
            })
        })
        .catch((err) => {
            console.log(err.message);   
            
        })
    }

  return (
      <Formdiv>
    <div> 
        <h3>Add Teacher Details</h3>
        <Input type="text" placeholder='name' value={name} onChange={(e)=>setName(e.target.value)}/>
        <Input type="text" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <Input type="text" placeholder='gender' value={gender} onChange={(e)=>setGender(e.target.value)}/>
        <Input type="text" placeholder='age' value={age} onChange={(e)=>setAge(e.target.value)}/>
    </div>
    <hr />
    <h3>Add No. of  Classes</h3>
    <form onSubmit={(e)=>handleSubmit(e)}>
        <Input type="text" placeholder='grade' id='grade'  onChange={(e)=>handleChange(e)}/>
        <Input type="text" placeholder='section' id='section'  onChange={(e)=>handleChange(e)}/>
        <Input type="text" placeholder='subject' id='subject'  onChange={(e)=>handleChange(e)}/>
        <Button style={{margin: "5px"}} variant="contained" color="primary" type='submit' >Add class</Button >
    </form>
    <hr />
    <Button  style={{margin: "5px"}} variant="contained" color="primary" onClick={handleAdd}>
          Submit
        </Button>
      </Formdiv>

  )
}

