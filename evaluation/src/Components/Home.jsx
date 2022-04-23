import axios from "axios";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { TeachersData } from "./TeachersData";
import { useDispatch, useSelector } from "react-redux";
import { getdata } from "../Redux/Data/action";
import { getDat } from "../Redux/Data/action";
import { Link } from "react-router-dom";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import styled from "styled-components";

const Sortingdiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const Home = () => {
  //-----------------use state-----------------for searching
  const [search, setSearch] = useState("");
  //-----------------destructure from redux-----------------
  const { error, loading, teacher_data, success } = useSelector(
    (state) => state.data
  );
  const dispatch = useDispatch();

  //-----------------use effect-----------------
  useEffect(() => {
    dispatch(getdata());
  }, []);

  //-----------------sorting functionality-----------------
  const sortByName = (val) => {
    var data_;
    console.log(val);
    if (val == 1) {
      data_ = teacher_data.sort((a, b) => {
        return a.age - b.age;
      });
      dispatch(getDat(data_));
    } else {
      data_ = teacher_data.sort((a, b) => {
        return b.age - a.age;
      });
      dispatch(getDat(data_));
    }
  };
//-----------------search functionality-----------------
  // const handlesearch = () => {
    // let temp = teacher_data
    // let searchteacher = temp.filter((teacher) => {
    //   return teacher.name.toLowerCase().includes(search.toLowerCase());
    // });
    // dispatch(getDat(searchteacher));
    // setSearch("");
  // };
  // const handlesearch = () => {
  //  axios.get(`https://scholmybackend.herokuapp.com/teachers?q=${search}`)
  //   .then(res => {
  //     dispatch(getDat(res.data));
  //     console.log(res.data);
  //   }
  //   )
  //   .catch(err => {
  //     // console.log(err);
  //   }
  //   )
  // };

  //-----------------rendering-----------------
  const handlereset = () => {
    setSearch("");
  };

  return (
    <div className="App" style={{ margin: "auto" }}>
      {/* <TeachersData/> */}
      <h1>Teacher Management</h1>
      <Sortingdiv>
        <Button
        style={{margin: "5px"}}
          variant="contained"
          color="primary"
          onClick={() => sortByName(1)}
        >
          Asen
        </Button>
        <Button
         style={{margin: "5px"}}
          variant="contained"
          color="primary"
          onClick={() => sortByName(2)}
        >
          Dece
        </Button>
        </Sortingdiv>
        <Sortingdiv>

        <br />
        <input
          style={{padding: "5px"}}
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          />
        {/* <Button  style={{margin: "5px"}} variant="contained" color="primary" >
          Search
        </Button> */}
          <Button  style={{margin: "5px"}} variant="contained" color="primary" onClick={handlereset}>
          Reset
        </Button>
          </Sortingdiv>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow style={{backgroundColor:"rgb(25,118,210)"}}>
              <TableCell><b>Sr.No</b> </TableCell>
              <TableCell><b>Name</b></TableCell>
              <TableCell><b>Email</b></TableCell>
              <TableCell><b>Age</b></TableCell>
              <TableCell><b>Classes</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {teacher_data.filter((teacher) => {
       return teacher.name.toLowerCase().includes(search.toLowerCase());
     }).map((teacher, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{teacher.name}</TableCell>
                <TableCell>{teacher.email}</TableCell>
                <TableCell>{teacher.age}</TableCell>
                <Link to={`/teachers/${teacher._id}`}>classes</Link>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
