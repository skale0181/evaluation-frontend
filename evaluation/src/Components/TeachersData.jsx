
import { useDispatch, useSelector } from "react-redux"
import React, { useEffect }  from 'react'
import { getdata } from "../Redux/Data/action";

export const TeachersData = () => {

  // const teachers = useSelector((state) => state.teachers);
  // const loading = useSelector((state) => state.teachersData.loading);
  // const error = useSelector((state) => state.teachersData.error);
  // const success = useSelector((state) => state.teachersData.success);

  // dispatch(getdata())
  const {error,loading,teacher_data,success} = useSelector((state) => state.data);
  const dispatch = useDispatch()

  
  useEffect(() => { 
    dispatch(getdata()) 
  }, [])
  
  console.log(teacher_data);

  return (
    <div className="App">
<h1>Teachers Data</h1>
<table style={{margin:"auto"}}>
  <thead >
    <tr style={{border:"1px solid red"}} >
      <th style={{border:"1px solid red"}}>index</th>
      <th style={{border:"1px solid red"}}>Name</th>
      <th style={{border:"1px solid red"}}>Age</th>
      <th style={{border:"1px solid red"}}>Hobby</th>
    </tr>
  </thead>
  <tbody>
    {teacher_data.map((teacher,index) => (    
      <tr key={index} style={{border:"1px solid red"}}>
        <td style={{border:"1px solid red"}}>{index+1}</td> 
        <td style={{border:"1px solid red"}}>{teacher.name}</td>
        <td style={{border:"1px solid red"}}>{teacher.age}</td>
        <td style={{border:"1px solid red"}}>{teacher.hobby}</td>
      </tr>
    ))}
  </tbody>
</table>

    </div>
  )
}





