
import axios from "axios";
import { useEffect, useState } from "react"
import Button from '@mui/material/Button';

export const Home = ()=>{
   const [db,setdb]=useState([]);
   useEffect(()=>{
    axios.get("https://schooldata1.herokuapp.com/teachers").then((res)=>{
        setdb(res.data)
      }) 
   },[])

  
   const handlesorthtl = ()=>{
       axios.get("https://schooldata1.herokuapp.com/teachers").then((res)=>{
           setdb(res.data.sort((a,b)=>{
               return b.age-a.age;
           }))
       })
   }

   const handlefilter = (e)=>{
         axios.get("https://schooldata1.herokuapp.com/teachers").then((res)=>{
                setdb(res.data.filter((item)=>{
                    return item.name.toLowerCase().includes(e.target.value.toLowerCase())   
                }))
            })
    }

    const deleteitem = (id)=>{
        axios.delete(`https://schooldata1.herokuapp.com/${id}`).then((res)=>{
            setdb(db.filter((item)=>{
                return item._id!==id
            }))
            setdb(db)
        })
    }

    return (
        <div className="App" style={{margin:"auto"}}>
         
          <h3>Sort by Age</h3>
          <Button onClick={handlesorthtl}>High To Low</Button>
          <Button>Low To High</Button>
          <h3>Filter by Gender</h3>
          <Button onClick={()=>handlefilter(e)}>mail</Button>
          <Button>female</Button>
          <table style={{margin:"auto"}}>
              <thead>
                  <tr>
                     <th>Name</th>
                     <th>Age</th>
                     <th>Gender</th>
                 </tr>
              </thead>
             <tbody>
                 {db.map((e)=><tr key={e.id}>
                   <td>{e.name}</td>
                   <td>{e.age}</td>
                   <td>{e.gender}</td> 
                   <Button style={{backgroundColor:"red"}} onClick={()=>deleteitem(e.id)}>Delete</Button>
                 </tr>)}
             </tbody>
          </table>
        </div>
    )
}