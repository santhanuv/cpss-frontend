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

const data = [
  {
    "First Name": "Student",
    "Last Name": "One",
    Email: "studentone@saitgits.org",
    DOB: "15-11-2001",
    Phone: "0123456789",
    Gender: "Male",
    Address: "housename(H), myplace, city, state, code",
  },
];

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
            <h2>Basic Info</h2>
            <div className="info-card">
              <div className="info">
                <h4>First Name</h4>
                <h4>Student</h4>
                <span className="icon-box">
                  <MdEdit className="icon" />
                </span>
              </div>
              <div className="info">
                <h4>Last Name</h4>
                <h4>One</h4>
                <span className="icon-box">
                  <MdEdit className="icon" />
                </span>
              </div>
              <div className="info">
                <h4>Email</h4>
                <h4>studentOne@saintgits.org</h4>
                <span className="icon-box">
                  <MdEdit className="icon" />
                </span>
              </div>
              <div className="info">
                <h4>DOB</h4>
                <h4>15-11-2001</h4>
                <span className="icon-box">
                  <MdEdit className="icon" />
                </span>
              </div>
              <div className="info">
                <h4>Gender</h4>
                <h4>Male</h4>
                <span className="icon-box">
                  <MdEdit className="icon" />
                </span>
              </div>
              <div className="info">
                <h4>Phone</h4>
                <h4>0123456789</h4>
                <span className="icon-box">
                  <MdEdit className="icon" />
                </span>
              </div>
              <div className="info" id="last">
                <h4>Address</h4>
                <h4>
                  Housename(H), Placename
                  <br />
                  City,State,Code
                </h4>
                <span className="icon-box">
                  <MdEdit className="icon" />
                </span>
              </div>
            </div>

            <h2>Student Info</h2>
            <div className="info-card">
              <div className="info">
                <h4>Register NO</h4>
                <h4>MGP19CS123</h4>
                <span className="icon-box">
                  <MdEdit className="icon" />
                </span>
              </div>
              <div className="info">
                <h4>Admission NO</h4>
                <h4>CS-19-544</h4>
                <span className="icon-box">
                  <MdEdit className="icon" />
                </span>
              </div>
              <div className="info">
                <h4>Batch</h4>
                <h4>19-23</h4>
                <span className="icon-box">
                  <MdEdit className="icon" />
                </span>
              </div>
              <div className="info">
                <h4>Branch</h4>
                <h4>CSE</h4>
                <span className="icon-box">
                  <MdEdit className="icon" />
                </span>
              </div>
              <div className="info">
                <h4>10th School</h4>
                <h4>Crossroads Higher Secondary School Pampady</h4>
                <span className="icon-box">
                  <MdEdit className="icon" />
                </span>
              </div>
              <div className="info">
                <h4>10th Percentage</h4>
                <h4>86.85%</h4>
                <span className="icon-box">
                  <MdEdit className="icon" />
                </span>
              </div>
              <div className="info">
                <h4>12th School</h4>
                <h4>Crossroads Higher Secondary School Pampady</h4>
                <span className="icon-box">
                  <MdEdit className="icon" />
                </span>
              </div>
              <div className="info" id="last">
                <h4>12th Percentage</h4>
                <h4>86.85%</h4>
                <span className="icon-box">
                  <MdEdit className="icon" />
                </span>
              </div>
            </div>
          </>
        ) : (
          <>
            <h2>Semester Grades</h2>
            <div className="info-card">
              <div className="info">
                <h4>S1 SGPA</h4>
                <h4>7.75</h4>
                <span className="icon-box">
                  <MdEdit className="icon" />
                </span>
              </div>
              <div className="info">
                <h4>S2 SGPA</h4>
                <h4>8.5</h4>
                <span className="icon-box">
                  <MdEdit className="icon" />
                </span>
              </div>
              <div className="info">
                <h4>S3 SGPA</h4>
                <h4>9.5</h4>
                <span className="icon-box">
                  <MdEdit className="icon" />
                </span>
              </div>
              <div className="info">
                <h4>S4 SGPA</h4>
                <h4>7.85</h4>
                <span className="icon-box">
                  <MdEdit className="icon" />
                </span>
              </div>
              <div className="info">
                <h4>S5 SGPA</h4>
                <h4>8.72</h4>
                <span className="icon-box">
                  <MdEdit className="icon" />
                </span>
              </div>
              <div className="info">
                <h4>S6 SGPA</h4>
                <h4>9.56</h4>
                <span className="icon-box">
                  <MdEdit className="icon" />
                </span>
              </div>
              <div className="info">
                <h4>S7 SGPA</h4>
                <h4>9.05</h4>
                <span className="icon-box">
                  <MdEdit className="icon" />
                </span>
              </div>
              <div className="info">
                <h4>S8 SGPA</h4>
                <h4>9.57</h4>
                <span className="icon-box">
                  <MdEdit className="icon" />
                </span>
              </div>
              <div className="info" id="last">
                <h4>CGPA</h4>
                <h4>9.5</h4>
                <span className="icon-box">
                  <MdEdit className="icon" />
                </span>
              </div>
            </div>
            <h2>Backlog Info</h2>
            <div className="info-card">
              <div className="info">
                <h4>Current Backlogs</h4>
                <h4>0</h4>
                <span className="icon-box">
                  <MdEdit className="icon" />
                </span>
              </div>
              <div className="info" id="last">
                <h4>Backlog History</h4>
                <h4>0</h4>
                <span className="icon-box">
                  <MdEdit className="icon" />
                </span>
              </div>
            </div>
            <h2>Skill Set</h2>
            <div className="info-card">
              <div className="info">
                <h4>C Programming</h4>
                <span className="icon-box">
                  <MdEdit className="icon" />
                </span>
              </div>
              <div className="info">
                <h4>MERN Stack</h4>
                <span className="icon-box">
                  <MdEdit className="icon" />
                </span>
              </div>
              <div className="info" id="last">
                <h4>Python</h4>
                <span className="icon-box">
                  <MdEdit className="icon" />
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </Styles>
  );
};

export default MyData;
