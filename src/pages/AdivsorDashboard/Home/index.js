import { useEffect, useState } from "react";
import StyledHome from "./Home.Styled";
import Table from "../../../components/Table";
import { MdDelete } from "react-icons/md";
import { useOutletContext } from "react-router-dom";
import { deleteStudent } from "../../../api/advisory";
import useAuthAxios from "../../../hooks/useAuthAxios";

const addDeleteIcon = (data, callback) => {
  return data.map((row, index) => {
    row.push(
      <button className="delete-icon" onClick={() => callback(index)}>
        <MdDelete className="icon" /> Delete
      </button>
    );
    return row;
  });
};

const headCols = ["#", "Name", "Adm NO", "Branch", "Action"];

const data = addDeleteIcon([
  ["1", "Student One", "51", "CS-19-544", "19-23"],
  ["2", "Student Two", "54", "CS-19-546", "19-23"],
]);

const Home = () => {
  const [advisoryStudents, fetchData] = useOutletContext();
  const axios = useAuthAxios();

  const deleteData = async (index) => {
    try {
      const studentID = advisoryStudents[index].student_id;

      const { response, err } = await deleteStudent(axios, studentID);

      if (response) {
        console.log(response.data);
        fetchData();
      } else {
        console.error(err);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const tableData = addDeleteIcon(
    advisoryStudents.map((student, index) => [
      index + 1,
      `${student.first_name} ${student.last_name}`,
      student.adm_no,
      student.branch,
    ]),
    deleteData
  );

  return (
    <StyledHome>
      <h2>Advisory Students</h2>
      <div className="batch-section">{}</div>
      <Table colNames={headCols} data={tableData} />
    </StyledHome>
  );
};

export default Home;
