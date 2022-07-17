import { useState } from "react";
import SelectInput from "../../../components/SelectInput";
import TextField from "../../../components/TextField";
import Styled from "./Styled";

const StudentRegister = () => {
  const [formState, setFormState] = useState(0);

  const handleNext = (e) => {
    e.preventDefault();
    setFormState((prev) => (prev !== 3 ? prev + 1 : prev));
  };

  const handleBack = (e) => {
    e.preventDefault();
    setFormState((prev) => (prev !== 0 ? prev - 1 : prev));
  };

  return (
    <Styled>
      <h1>Student Registeration</h1>
      <div className="register-card">
        <form>
          {formState === 0 && (
            <div className="personal">
              <h2>Personal</h2>
              <SelectInput
                label="Gender"
                options={[
                  { value: "Male" },
                  { value: "Female" },
                  { value: "Other" },
                ]}
              />
              <TextField label="Address" errorMsg="" />
              <TextField label="Phone" errorMsg="" />
              <TextField type="date" label="DOB" errorMsg="" />
            </div>
          )}
          {formState === 1 && (
            <div className="student">
              <h2>Student</h2>
              <TextField label="Register No" placeholder="MGP..." errorMsg="" />
              <TextField label="Admission No" errorMsg="" />
              <SelectInput
                label="Batch"
                options={[
                  { value: "19-23" },
                  { value: "20-24" },
                  { value: "21-25" },
                ]}
              />
              <SelectInput
                label="Branch"
                options={[{ value: "CSE" }, { value: "CE" }, { value: "ME" }]}
              />
            </div>
          )}
          {formState === 2 && (
            <div className="education">
              <h2>Educational</h2>
              <TextField
                label="Skills"
                placeholder="comma seperated list"
                errorMsg=""
              />
              <TextField label="12th School" errorMsg="" />
              <TextField label="12th Percentage" errorMsg="" />
              <TextField label="10th School" errorMsg="" />
              <TextField label="10th Percentage" errorMsg="" />
            </div>
          )}
          {formState === 3 && (
            <div className="semester">
              <h2>Academic</h2>
              <div className="set">
                {["S1", "S2", "S3"].map((sem) => (
                  <TextField key={sem} label={sem} errorMsg="" />
                ))}
              </div>
              <div className="set">
                {["S4", "S5", "S6"].map((sem) => (
                  <TextField key={sem} label={sem} errorMsg="" />
                ))}
              </div>
              <div className="set">
                {["S7", "S8", "CGPA"].map((sem) => (
                  <TextField key={sem} label={sem} errorMsg="" />
                ))}
              </div>
              <div className="set" id="4">
                <TextField
                  label="Current Backlogs"
                  placeholder="# Current Backlogs"
                  errorMsg=""
                />
                <TextField
                  label="History Backlogs"
                  placeholder="# Cleared & Uncleared"
                  errorMsg=""
                />{" "}
              </div>
            </div>
          )}
          <div className="action-btns">
            {formState !== 0 && (
              <button onClick={handleBack} id="back-btn">
                Back
              </button>
            )}
            {formState !== 3 && (
              <button onClick={handleNext} id="next-btn">
                Next
              </button>
            )}
            {formState === 3 && (
              <button onClick={(e) => e.preventDefault()} id="submit-btn">
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </Styled>
  );
};

export default StudentRegister;
