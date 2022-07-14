import React, { useState } from "react";
import Table from "../../../components/Table";
import Styles from "./MyData.Styled";
import { MdEdit } from "react-icons/md";

const addEditIcon = (data) => {
  return data.map((row) => {
    row.push(
      <button className="edit-icon">
        <MdEdit className="icon" /> Edit
      </button>
    );
    return row;
  });
};

const headCols = ["#", "Field", "Value", "Updated On", "Action"];

const personalData = addEditIcon([
  ["1", "DOB", "12-05-2001", "28-01-2022"],
  ["2", "First Name", "Santhanu", "12-08-2001"],
]);

const acadamicData = addEditIcon([
  ["1", "cgpa", "8.5", "28-01-2022"],
  ["2", "backlogs", "0", "12-08-2001"],
]);

const MyData = () => {
  const [selectorState, setSelectorState] = useState(0);

  const handleSelectorState = (e) => {
    if (e.currentTarget.name === "personal") {
      setSelectorState(0);
    } else if (e.currentTarget.name === "academic") {
      setSelectorState(1);
    } else {
      console.error("unknown name");
    }
  };

  return (
    <Styles>
      <div className="selector">
        <button
          name="personal"
          id={selectorState === 0 ? "active" : "inactive"}
          onClick={handleSelectorState}
        >
          Personal
        </button>
        <button
          name="academic"
          id={selectorState === 1 ? "active" : "inactive"}
          onClick={handleSelectorState}
        >
          Academic
        </button>
      </div>
      <div className="content">
        {selectorState === 0 ? (
          <>
            <h1>Personal Information</h1>
            <Table colNames={headCols} data={personalData} />
          </>
        ) : (
          <>
            <h1>Academic Information</h1>
            <Table colNames={headCols} data={acadamicData} />
          </>
        )}
      </div>
    </Styles>
  );
};

export default MyData;
