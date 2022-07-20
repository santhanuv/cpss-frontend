import React, { useEffect, useState } from "react";
import { format, parseISO } from "date-fns";
import Styles from "./VerifyProfile.Styled";
import { TbFaceIdError } from "react-icons/tb";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { getStudentData, updateStudentStatus } from "../../../api/advisory";
import useAuthAxios from "../../../hooks/useAuthAxios";
import { updateStudent } from "../../../api/student";

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

const VerifyProfile = ({
  closeCallback = () => {},
  student = {},
  submitCallback = () => {},
}) => {
  const [studentData, setStudentData] = useState({});
  const axios = useAuthAxios();

  useEffect(() => {
    (async () => {
      try {
        if (student.adm_no) {
          const { response, err } = await getStudentData(axios, student.adm_no);

          if (response) {
            setStudentData(response.data);
          } else {
            console.error(err);
          }
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  const updateStatus = async (status) => {
    try {
      const admNO = studentData["adm_no"];
      const { response, err } = await updateStudentStatus(axios, admNO, status);

      if (response) {
        console.log(response.data);
        submitCallback();
      } else {
        console.error(err);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Styles>
      <div className="breadcrumbs">
        <button onClick={() => closeCallback(false)} className="link">
          Verify
        </button>
        <MdKeyboardArrowRight className="icon" />
        <h3 className="text">Student Name</h3>
      </div>
      <div className="content">
        <div className="info-section">
          <div className="info-head">
            <h2>Basic Info</h2>
          </div>
          <div className="info-card">
            <div className="info" id="firstName">
              <h6>First Name</h6>
              <h4>{studentData["first_name"]}</h4>
            </div>
            <div className="info" id="lastName">
              <h6>Last Name</h6>
              <h4>{studentData["last_name"]}</h4>
            </div>
            <div className="info" id="email">
              <h6>Email</h6>
              <h4>{studentData["email"]}</h4>
            </div>
            <div className="info" id="dob">
              <h6>DOB</h6>
              <h4>{studentData["dob"] && formatDate(studentData["dob"])}</h4>
            </div>
            <div className="info" id="gender">
              <h6>Gender</h6>
              <h4>{studentData["gender"]}</h4>
            </div>
            <div className="info" id="phone">
              <h6>Phone</h6>
              <h4>{studentData["phone"]}</h4>
            </div>
            <div className="info last" id="address">
              <h6>Address</h6>
              <h4>{studentData["address"]}</h4>
            </div>
          </div>
        </div>
        <div className="info-section">
          <div className="info-head">
            <h2>Student Info</h2>
          </div>
          <div className="info-card">
            <div className="info" id="registerNO">
              <h6>Register NO</h6>
              <h4>{studentData["register_no"]}</h4>
            </div>
            <div className="info" id="admissionNO">
              <h6>Admission NO</h6>
              <h4>{studentData["adm_no"]}</h4>
            </div>
            <div className="info" id="batch">
              <h6>Batch</h6>
              <h4>{studentData["batch"]}</h4>
            </div>
            <div className="info" id="branch">
              <h6>Branch</h6>
              <h4>{studentData["branch"]}</h4>
            </div>
            <div className="info" id="tenthSchool">
              <h6>10th School</h6>
              <h4>{studentData["tenth_school"]}</h4>
            </div>
            <div className="info" id="tenthPercent">
              <h6>10th Percentage</h6>
              <h4>{studentData["tenth_percentage"]} %</h4>
            </div>
            <div className="info" id="twelthSchool">
              <h6>12th School</h6>
              <h4>{studentData["twelth_school"]}</h4>
            </div>
            <div className="info last" id="twelthPercent">
              <h6>12th Percentage</h6>
              <h4>{studentData["twelth_percentage"]} %</h4>
            </div>
          </div>
        </div>

        <div>
          <div className="info-section">
            <div className="info-head">
              <h2>Semester Grades</h2>
            </div>
            <div className="info-card">
              <div className="info" id="s1Sgpa">
                <h6>S1 SGPA</h6>
                <h4>{studentData["sgpa_s1"]}</h4>
              </div>
              <div className="info" id="s2Sgpa">
                <h6>S2 SGPA</h6>
                <h4>{studentData["sgpa_s2"]}</h4>
              </div>
              <div className="info" id="s3Sgpa">
                <h6>S3 SGPA</h6>
                <h4>{studentData["sgpa_s3"]}</h4>
              </div>
              <div className="info" id="s4Sgpa">
                <h6>S4 SGPA</h6>
                <h4>{studentData["sgpa_s4"]}</h4>
              </div>
              <div className="info" id="s5Sgpa">
                <h6>S5 SGPA</h6>
                <h4>{studentData["sgpa_s5"]}</h4>
              </div>
              <div className="info" id="s6Sgpa">
                <h6>S6 SGPA</h6>
                <h4>{studentData["sgpa_s6"]}</h4>
              </div>
              <div className="info" id="s7Sgpa">
                <h6>S7 SGPA</h6>
                <h4>{studentData["sgpa_s7"]}</h4>
              </div>
              <div className="info" id="s8Sgpa">
                <h6>S8 SGPA</h6>
                <h4>{studentData["sgpa_s8"]}</h4>
              </div>
              <div className="info last" id="cgpa">
                <h6>CGPA</h6>
                <h4>{studentData["cgpa"]}</h4>
              </div>
            </div>
          </div>
          <div className="info-section">
            <div className="info-head">
              <h2>Backlog Info</h2>
            </div>
            <div className="info-card">
              <div className="info" id="currentBacklogs">
                <h6>Current Backlogs</h6>
                <h4>{studentData["current_backlogs"]}</h4>
              </div>
              <div className="info last" id="backlogHistory">
                <h6>Backlog History</h6>
                <h4>{studentData["backlog_history"]}</h4>
              </div>
            </div>
          </div>
          <div className="info-section">
            <div className="info-head">
              <h6>Skills</h6>
            </div>
            <div className="info-card">
              {!studentData["skills"] && (
                <div className="empty-skills">
                  <TbFaceIdError className="icon" />{" "}
                  <span className="text">No skills uploaded.</span>
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
          <div className="action-btns">
            <button
              className="approve"
              onClick={() => {
                updateStatus("approved");
              }}
            >
              Approve
            </button>
            <button
              className="reject"
              onClick={() => {
                updateStatus("rejected");
              }}
            >
              Reject
            </button>
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default VerifyProfile;
