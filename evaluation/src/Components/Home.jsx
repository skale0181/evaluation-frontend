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
  const [search, setSearch] = useState("");
  const { error, loading, teacher_data, success } = useSelector(
    (state) => state.data
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getdata());
  }, []);

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

  const handlesearch = () => {
    let searchteacher = teacher_data.filter((teacher) => {
      dispatch(getdata());
      return teacher.name.toLowerCase().includes(search.toLowerCase());
    });
    dispatch(getDat(searchteacher));
    // setSearch("");
  };

  return (
    <div className="App" style={{ margin: "auto" }}>
      {/* <TeachersData/> */}
      <h1>Teacher Management</h1>
      <Sortingdiv>
        <Button
          variant="contained"
          color="primary"
          onClick={() => sortByName(1)}
        >
          Get Data
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => sortByName(2)}
        >
          Get Data
        </Button>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handlesearch}>
          Search
        </Button>
      </Sortingdiv>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Index</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Hobby</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {teacher_data.map((teacher, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{teacher.name}</TableCell>
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
