import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getTeacher } from '../Redux/Data/action';





export const ShowTeacher = () => {

    const {id} = useParams();
    // console.log(id);
    const teacher_data_one = useSelector((state) => state.data.teacher_data_one);
    const dispatch = useDispatch()
    useEffect(() => {
       dispatch(getTeacher(id))
    }, []);

    const classes = teacher_data_one.class_id
    // console.log(classes);
    // console.log(teacher_data_one);


  return (
    <div className="container" key={teacher_data_one.id}>
        <h3>Teacher Details</h3>
      <span className="pTag">Teacher Name : </span>
      <span className="data"> {teacher_data_one.name}</span>
      <br />
      <span className="pTag">Email : </span>
      <span className="data"> {teacher_data_one.email}</span>
      <br />
      <span className="pTag">Gender : </span>
      <span className="data"> {teacher_data_one.gender}</span>
      <br />
      <span className="pTag">Age : </span>
      <span className="data"> {teacher_data_one.age}</span>
      <br />

      <h3 >Classes Details</h3>
      {classes && classes?.map((classe,index) => {
        return (
          <div key={classe.id}>
              <h4>{index+1}</h4>
            <span className="pTag"> Section : </span>
            <span className="data"> {classe.section}</span><br />
            <span className="pTag"> Subject : </span>
            <span className="data"> {classe.subject}</span><br />
            <span className="pTag"> Grade : </span>
            <span className="data"> {classe.grade}</span><br />
            <hr />
          </div>
        );
      })}
    </div>
  )
}
