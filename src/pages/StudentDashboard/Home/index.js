import React from "react";
import Styles from "./Home.Styled";
import Table from "../../../components/Table";

const headCols = ["#", "Field", "New", "Old", "Updated On", "Status"];

const data = [
  ["1", "DOB", "12-05-2001", "12-04-2001", "28-01-2022", "Not Approved"],
  ["2", "First Name", "Shoun", "Shawn", "12-08-2001", "Approved"],
];

const Home = () => {
  return (
    <Styles>
      <h1>Approval Status</h1>
      <Table colNames={headCols} data={data} />
    </Styles>
  );
};

export default Home;
