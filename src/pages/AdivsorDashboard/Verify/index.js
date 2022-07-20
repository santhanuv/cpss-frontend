import Table from "../../../components/Table";
import StyledVerify from "./Verify.Styled";
import { MdCheckCircle } from "react-icons/md";
import { Link, Outlet, useLocation, useOutletContext } from "react-router-dom";
import VerifyProfile from "../VerifyProfile";
import { useState } from "react";
import { MdDoneAll } from "react-icons/md";

const verifyProfileLoc = "/advisor/verify/profile";

const addVerifyIcon = (data, callback) => {
  return data.map((row, index) => {
    row.length > 0 &&
      row.push(
        <button
          id={index}
          to={verifyProfileLoc}
          onClick={callback}
          className="verify-icon"
        >
          <MdCheckCircle className="icon" /> Verify
        </button>
      );
    return row;
  });
};

const headCols = ["#", "Name", "Adm NO", "batch", "branch", "Action"];

const data = addVerifyIcon([
  ["1", "Student One", "CS-19-544", "24-07-2022"],
  ["1", "Student Two", "CS-19-534", "24-07-2022"],
]);

const Verify = () => {
  const location = useLocation();
  const [advisoryStudents, fetchData] = useOutletContext();
  const [verifyMode, setVerifyMode] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState({});

  const handleVerifyMode = (mode) => {
    setVerifyMode(mode);
  };

  const handleVerification = (e) => {
    const id = e.currentTarget.id;
    setSelectedStudent(advisoryStudents[id]);
    handleVerifyMode(true);
  };

  const tableData = addVerifyIcon(
    advisoryStudents.map((student, index) =>
      student.status === "updated"
        ? [
            index + 1,
            `${student.first_name} ${student.last_name}`,
            `${student.adm_no}`,
            `${student.batch}`,
            `${student.branch}`,
          ]
        : []
    ),
    handleVerification
  ).filter((row) => row.length !== 0);

  return verifyMode ? (
    <VerifyProfile
      closeCallback={() => {
        handleVerifyMode(false);
      }}
      student={selectedStudent}
      submitCallback={() => {
        fetchData();
        handleVerifyMode(false);
      }}
    />
  ) : (
    <StyledVerify>
      <h2>New Student Updates</h2>
      {tableData.length === 0 ? (
        <div className="done-msg">
          <MdDoneAll className="icon" />
          All Students are updated
        </div>
      ) : (
        <Table colNames={headCols} data={tableData} />
      )}
    </StyledVerify>
  );
};

export default Verify;
