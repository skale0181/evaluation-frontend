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
      <span >Teacher Name : </span>
      <span > {teacher_data_one.name}</span>
      <br />
      <span >Email : </span>
      <span > {teacher_data_one.email}</span>
      <br />
      <span >Gender : </span>
      <span > {teacher_data_one.gender}</span>
      <br />
      <span >Age : </span>
      <span > {teacher_data_one.age}</span>
      <br />

      <h3 >Classes Details</h3>
      {classes && classes?.map((classe,index) => {
        return (
          <div key={classe.id}>
              <h4>{index+1}</h4>
            <span > Section : </span>
            <span > {classe.section}</span><br />
            <span > Subject : </span>
            <span > {classe.subject}</span><br />
            <span > Grade : </span>
            <span > {classe.grade}</span><br />
            <hr />
          </div>
        );
      })}
    </div>
  )
}
