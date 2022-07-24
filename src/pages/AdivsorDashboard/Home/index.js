import { useEffect, useState } from "react";
import StyledHome from "./Home.Styled";
import Table from "../../../components/Table";
import { MdOutlineRemoveCircle } from "react-icons/md";
import { AiFillExclamationCircle } from "react-icons/ai";
import { useOutletContext } from "react-router-dom";
import { deleteStudent } from "../../../api/advisory";
import useAuthAxios from "../../../hooks/useAuthAxios";
import { updateStudentStatus } from "../../../api/advisory";
import AlertDialog from "../../../components/AlertDialog";

const addRejectIcon = (data, callback) => {
  return data.map((row, index) => {
    row.push(
      <button className="delete-icon" onClick={() => callback(index)}>
        <MdOutlineRemoveCircle className="icon" /> Reject
      </button>
    );
    return row;
  });
};

const Home = () => {
  const [advisoryStudents, fetchData] = useOutletContext();
  const [studentStatus, setStudentStatus] = useState("approved");
  const [studentsToShow, setStudentsToShow] = useState([]);
  const [alertOpen, setAlertOpen] = useState({
    state: false,
    status: false,
    msg: "",
  });
  const axios = useAuthAxios();

  const handleStatusChange = (e) => {
    const id = e.currentTarget.id;
    if (id) setStudentStatus(id);
  };

  const updateStatus = async (index) => {
    try {
      const admNO = advisoryStudents[index].adm_no;
      const { response, err } = await updateStudentStatus(
        axios,
        admNO,
        "rejected"
      );

      if (response) {
        console.log(response);
        setAlertOpen({ state: true, status: true, msg: "Student Updated" });
      } else {
        console.error(err);
        setAlertOpen({
          state: true,
          status: false,
          msg: "Unable to update student status.",
        });
      }
    } catch (err) {
      console.error(err);
      setAlertOpen({
        state: true,
        status: false,
        msg: "Something Went wrong!!",
      });
    }
  };

  useEffect(() => {
    const filteredStudents = advisoryStudents.filter(
      (student) => student.status === studentStatus
    );
    setStudentsToShow(filteredStudents);
  }, [studentStatus]);

  const headCols = [
    "#",
    "Name",
    "Adm NO",
    "Branch",
    studentStatus !== "rejected" ? "Action" : null,
  ].filter((value) => value !== null);

  const tableData =
    studentStatus !== "rejected"
      ? addRejectIcon(
          studentsToShow.map((student, index) => [
            index + 1,
            `${student.first_name} ${student.last_name}`,
            student.adm_no,
            student.branch,
          ]),
          updateStatus
        )
      : studentsToShow.map((student, index) => [
          index + 1,
          `${student.first_name} ${student.last_name}`,
          student.adm_no,
          student.branch,
        ]);

  return (
    <StyledHome>
      <AlertDialog
        state={alertOpen.state}
        status={alertOpen.status}
        msg={alertOpen.msg}
        onBtnClick={() => {
          if (alertOpen.status) fetchData();
          setAlertOpen((prev) => ({ ...prev, state: false }));
        }}
      />
      <h2>Advisory Students</h2>
      <div className="selector">
        <button id="approved" onClick={handleStatusChange}>
          Approved
        </button>
        <button id="updated" onClick={handleStatusChange}>
          Updated
        </button>
        <button id="rejected" onClick={handleStatusChange}>
          Rejected
        </button>
      </div>
      {tableData.length !== 0 ? (
        <Table colNames={headCols} data={tableData} />
      ) : (
        <div className={`done-msg ${studentStatus}`}>
          <AiFillExclamationCircle className="icon" />
          No {studentStatus} students
        </div>
      )}
    </StyledHome>
  );
};

export default Home;
