import React from "react";
import StyledHome from "./Home.Styled";
import Table from "../../../components/Table";
import { MdDelete } from "react-icons/md";

const addDeleteIcon = (data) => {
  return data.map((row) => {
    row.push(
      <button className="delete-icon">
        <MdDelete className="icon" /> Delete
      </button>
    );
    return row;
  });
};

const headCols = ["#", "Name", "Roll NO", "Adm NO", "Batch", "Action"];

const data = addDeleteIcon([
  ["1", "Student One", "51", "CS-19-544", "19-23"],
  ["2", "Student Two", "54", "CS-19-546", "19-23"],
]);

const Home = () => {
  return (
    <StyledHome>
      <h2>Advisory Students</h2>
      <Table colNames={headCols} data={data} />
    </StyledHome>
  );
};

export default Home;
