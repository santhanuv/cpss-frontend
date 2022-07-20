import React, { useState, useEffect, useRef } from "react";
import Table from "../../../components/Table";
import Styles from "./Profile.Styled";
import { MdEdit, MdVerifiedUser, MdOutlineHourglassTop } from "react-icons/md";
import { FcCancel } from "react-icons/fc";
import { getAllStudentData, updateStudent } from "../../../api/student";
import useAuthAxios from "../../../hooks/useAuthAxios";
import { format, parseISO, set } from "date-fns";
import { useNavigate } from "react-router-dom";
import { TbFaceIdError } from "react-icons/tb";
import EditBasic from "./BasicInfo/EditBasic";
import EditStudent from "./StudentInfo/EditStudent";
import SemesterGrades from "./SemesterGrades/SemesterGrades";
import EditBacklog from "./BacklogInfo/EditBacklog";
import EditSkills from "./Skills/EditSkills";
import studentRegisterSchema from "../../Register/Student/student.schema";

const initialEditState = {
  basic: false,
  student: false,
  semester: false,
  backlogs: false,
  skills: false,
};

const formatDate = (date) => {
  try {
    const newDate = new Date(date).toISOString();
    const inFormat = format(parseISO(newDate), "yyyy-MM-dd");
    return inFormat;
  } catch (err) {
    console.log(err);
    return "date error";
  }
};

const handleEdit = (e) => {
  console.log(e.currentTarget.id);
};

const MyData = () => {
  const [selectorState, setSelectorState] = useState(0);
  const [verified, setVerified] = useState("");
  const [editMode, setEditMode] = useState(initialEditState);
  const [studentData, setStudentData] = useState({});
  const axios = useAuthAxios();
  const navigate = useNavigate();

  const handleEditMode = (section, ref = null) => {
    setEditMode((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  useEffect(() => {
    //fetch student data

    (async () => {
      try {
        const { response, err } = await getAllStudentData(axios);

        if (response) {
          setStudentData(response.data);
          if (Object.keys(response.data).length === 0)
            navigate("/student/register", { replace: true });
        } else {
          console.error(err.msg);
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  useEffect(() => {
    setVerified(studentData["status"] ? studentData["status"] : "");
  }, [studentData]);

  const update = async (data) => {
    try {
      const { response, err } = await updateStudent(axios, data);
      if (response) {
        const {
          response: { data: newStudentData },
          err,
        } = await getAllStudentData(axios);
        if (newStudentData) {
          setStudentData(newStudentData);
        } else {
          console.error(err);
        }
      } else {
        console.error(err);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // useEffect(() => {

  //   if (isMounted.current) {
  //     if (Object.keys(updatedData) !== 0) update();
  //   } else {
  //     isMounted.current = true;
  //   }
  // }, [updatedData]);

  const updateChange = (newData) => {
    setEditMode(initialEditState);
    update({ ...studentData, ...newData });
  };

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
      {editMode.basic && (
        <EditBasic
          formSchema={studentRegisterSchema}
          formCallback={updateChange}
          closeCallback={handleEditMode}
          autoFillData={{
            first_name: studentData["first_name"],
            last_name: studentData["last_name"],
            dob: formatDate(studentData["dob"]),
            address: studentData["address"],
            phone: studentData["phone"],
            gender: studentData["gender"],
            email: studentData["email"],
          }}
        />
      )}
      {editMode.student && (
        <EditStudent
          formSchema={studentRegisterSchema}
          formCallBack={updateChange}
          closeCallback={handleEditMode}
          autoFillData={{
            register_no: studentData["register_no"],
            adm_no: studentData["adm_no"],
            batch: studentData["batch"],
            branch: studentData["branch"],
            tenth_school: studentData["tenth_school"],
            tenth_percentage: studentData["tenth_percentage"],
            twelth_school: studentData["twelth_school"],
            twelth_percentage: studentData["twelth_percentage"],
          }}
        />
      )}
      {editMode.semester && (
        <SemesterGrades
          formSchema={studentRegisterSchema}
          formCallBack={updateChange}
          closeCallback={handleEditMode}
          autoFillData={{
            sgpa_s1: studentData["sgpa_s1"],
            sgpa_s2: studentData["sgpa_s2"],
            sgpa_s3: studentData["sgpa_s3"],
            sgpa_s4: studentData["sgpa_s4"],
            sgpa_s5: studentData["sgpa_s5"],
            sgpa_s6: studentData["sgpa_s6"],
            sgpa_s7: studentData["sgpa_s7"],
            sgpa_s8: studentData["sgpa_s8"],
            cgpa: studentData["cgpa"],
          }}
        />
      )}
      {editMode.backlogs && (
        <EditBacklog
          formSchema={studentRegisterSchema}
          formCallBack={updateChange}
          closeCallback={handleEditMode}
          autoFillData={{
            current_backlogs: studentData["current_backlogs"],
            backlog_history: studentData["backlog_history"],
          }}
        />
      )}
      {editMode.skills && (
        <EditSkills
          formSchema={studentRegisterSchema}
          formCallBack={updateChange}
          closeCallback={handleEditMode}
          autoFillData={{
            skills: studentData["skills"],
          }}
        />
      )}
      <h2 className="my-status">
        MY STATUS:{" "}
        {verified === "approved" ? (
          <span className="verified">
            <MdVerifiedUser className="icon" /> Approved
          </span>
        ) : verified === "updated" ? (
          <span className="not-verified">
            <MdOutlineHourglassTop className="icon" />
            Updated
          </span>
        ) : verified === "rejected" ? (
          <span className="rejected">
            <FcCancel className="icon" />
            Rejected
          </span>
        ) : (
          <span className="rejected">
            <FcCancel className="icon" />
            Error
          </span>
        )}
      </h2>
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
            <div className="info-section">
              <div className="info-head">
                <h2>Basic Info</h2>
                <button onClick={() => handleEditMode("basic")}>
                  <MdEdit className="icon" />
                </button>
              </div>
              <div className="info-card">
                <div className="info" onClick={handleEdit} id="firstName">
                  <h6>First Name</h6>
                  <h4>{studentData["first_name"]}</h4>
                </div>
                <div className="info" id="lastName" onClick={handleEdit}>
                  <h6>Last Name</h6>
                  <h4>{studentData["last_name"]}</h4>
                </div>
                <div className="info" id="email" onClick={handleEdit}>
                  <h6>Email</h6>
                  <h4>{studentData["email"]}</h4>
                </div>
                <div className="info" id="dob" onClick={handleEdit}>
                  <h6>DOB</h6>
                  <h4>
                    {studentData["dob"] && formatDate(studentData["dob"])}
                  </h4>
                </div>
                <div className="info" id="gender" onClick={handleEdit}>
                  <h6>Gender</h6>
                  <h4>{studentData["gender"]}</h4>
                </div>
                <div className="info" id="phone" onClick={handleEdit}>
                  <h6>Phone</h6>
                  <h4>{studentData["phone"]}</h4>
                </div>
                <div className="info last" id="address" onClick={handleEdit}>
                  <h6>Address</h6>
                  <h4>{studentData["address"]}</h4>
                </div>
              </div>
            </div>
            <div className="info-section">
              <div className="info-head">
                <h2>Student Info</h2>
                <button onClick={() => handleEditMode("student")}>
                  <MdEdit className="icon" />
                </button>
              </div>
              <div className="info-card">
                <div className="info" id="registerNO" onClick={handleEdit}>
                  <h6>Register NO</h6>
                  <h4>{studentData["register_no"]}</h4>
                </div>
                <div className="info" id="admissionNO" onClick={handleEdit}>
                  <h6>Admission NO</h6>
                  <h4>{studentData["adm_no"]}</h4>
                </div>
                <div className="info" id="batch" onClick={handleEdit}>
                  <h6>Batch</h6>
                  <h4>{studentData["batch"]}</h4>
                </div>
                <div className="info" id="branch" onClick={handleEdit}>
                  <h6>Branch</h6>
                  <h4>{studentData["branch"]}</h4>
                </div>
                <div className="info" id="tenthSchool" onClick={handleEdit}>
                  <h6>10th School</h6>
                  <h4>{studentData["tenth_school"]}</h4>
                </div>
                <div className="info" id="tenthPercent" onClick={handleEdit}>
                  <h6>10th Percentage</h6>
                  <h4>{studentData["tenth_percentage"]} %</h4>
                </div>
                <div className="info" id="twelthSchool" onClick={handleEdit}>
                  <h6>12th School</h6>
                  <h4>{studentData["twelth_school"]}</h4>
                </div>
                <div
                  className="info last"
                  id="twelthPercent"
                  onClick={handleEdit}
                >
                  <h6>12th Percentage</h6>
                  <h4>{studentData["twelth_percentage"]} %</h4>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="info-section">
              <div className="info-head">
                <h2>Semester Grades</h2>
                <button onClick={() => handleEditMode("semester")}>
                  <MdEdit className="icon" />
                </button>
              </div>
              <div className="info-card">
                <div className="info" id="s1Sgpa" onClick={handleEdit}>
                  <h4>S1 SGPA</h4>
                  <h4>{studentData["sgpa_s1"]}</h4>
                </div>
                <div className="info" id="s2Sgpa" onClick={handleEdit}>
                  <h4>S2 SGPA</h4>
                  <h4>{studentData["sgpa_s2"]}</h4>
                </div>
                <div className="info" id="s3Sgpa" onClick={handleEdit}>
                  <h4>S3 SGPA</h4>
                  <h4>{studentData["sgpa_s3"]}</h4>
                </div>
                <div className="info" id="s4Sgpa" onClick={handleEdit}>
                  <h4>S4 SGPA</h4>
                  <h4>{studentData["sgpa_s4"]}</h4>
                </div>
                <div className="info" id="s5Sgpa" onClick={handleEdit}>
                  <h4>S5 SGPA</h4>
                  <h4>{studentData["sgpa_s5"]}</h4>
                </div>
                <div className="info" id="s6Sgpa" onClick={handleEdit}>
                  <h4>S6 SGPA</h4>
                  <h4>{studentData["sgpa_s6"]}</h4>
                </div>
                <div className="info" id="s7Sgpa" onClick={handleEdit}>
                  <h4>S7 SGPA</h4>
                  <h4>{studentData["sgpa_s7"]}</h4>
                </div>
                <div className="info" id="s8Sgpa" onClick={handleEdit}>
                  <h4>S8 SGPA</h4>
                  <h4>{studentData["sgpa_s8"]}</h4>
                </div>
                <div className="info last" id="cgpa" onClick={handleEdit}>
                  <h4>CGPA</h4>
                  <h4>{studentData["cgpa"]}</h4>
                </div>
              </div>
            </div>
            <div className="info-section">
              <div className="info-head">
                <h2>Backlog Info</h2>
                <button onClick={() => handleEditMode("backlogs")}>
                  <MdEdit className="icon" />
                </button>
              </div>
              <div className="info-card">
                <div className="info" id="currentBacklogs" onClick={handleEdit}>
                  <h4>Current Backlogs</h4>
                  <h4>{studentData["current_backlogs"]}</h4>
                </div>
                <div
                  className="info last"
                  id="backlogHistory"
                  onClick={handleEdit}
                >
                  <h4>Backlog History</h4>
                  <h4>{studentData["backlog_history"]}</h4>
                </div>
              </div>
            </div>
            <div className="info-section">
              <div className="info-head">
                <h2>Skills</h2>
                <button onClick={() => handleEditMode("skills")}>
                  <MdEdit className="icon" />
                </button>
              </div>

              <div className="info-card">
                {!studentData["skills"] && (
                  <div className="empty-skills">
                    <TbFaceIdError className="icon" />{" "}
                    <span className="text">Update your skills.</span>
                  </div>
                )}

                {studentData["skills"] &&
                  studentData["skills"].split(",").map((skill) => {
                    const skillText = skill.trim();

                    return (
                      <div key={skillText} className="info">
                        <h4>{skillText}</h4>
                      </div>
                    );
                  })}
              </div>
            </div>
          </>
        )}
      </div>
    </Styles>
  );
};

export default MyData;
