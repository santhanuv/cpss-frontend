import { useState, useEffect } from "react";
import SelectInput from "../../../components/SelectInput";
import TextField from "../../../components/TextField";
import Styled from "./Styled";
import studentRegisterSchema from "./student.schema";
import useForm from "../../../hooks/useForm";
import useAuthAxios from "../../../hooks/useAuthAxios";
import { registerStudent } from "../../../api/student";
import { useNavigate } from "react-router-dom";
import { getAllBatches } from "../../../api/batch";
import { getAllBranches } from "../../../api/branch";

const initialFormData = {
  studentID: "",
  regNO: "",
  admNO: "",
  branch: "",
  batch: "",
  phone: "",
  dob: "",
  address: "",
  gender: "",
  twelthSchool: "",
  twelthPercentage: "",
  tenthSchool: "",
  tenthPercentage: "",
  sgpaS1: "",
  sgpaS2: "",
  sgpaS3: "",
  sgpaS4: "",
  sgpaS5: "",
  sgpaS6: "",
  sgpaS7: "",
  sgpaS8: "",
  cgpa: "",
  currentBacklogs: "",
  backlogHistory: "",
  skills: "",
};

const StudentRegister = () => {
  const [formState, setFormState] = useState(0);
  const [branches, setBranches] = useState([]);
  const [batches, setBatches] = useState([]);
  const navigate = useNavigate();
  const axios = useAuthAxios();
  const { register, errors, onSubmit } = useForm(
    initialFormData,
    studentRegisterSchema
  );

  useEffect(() => {
    (async () => {
      try {
        const {
          response: { data: batches },
          err: batchErr,
        } = await getAllBatches();

        const {
          response: { data: branches },
          err: branchErr,
        } = await getAllBranches();

        if (branches) {
          setBranches(branches);
        }

        if (batches) {
          setBatches(batches);
        }

        if (batchErr || branchErr) {
          batchErr && console.error(batchErr);
          branchErr && console.error(branchErr);
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  const createStudent = async (data) => {
    try {
      console.log(data);
      const { response, err } = await registerStudent(axios, data);

      if (response) {
        console.log(response);
        if (response.status === 200) navigate("/student", { replace: true });
      } else {
        console.error(err);
      }
    } catch (err) {
      console.log(err);
    }
  };

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
      <h1>Student Registration</h1>

      <div className="register-card">
        {/* <div className="progress-container">
          <div className="progress"></div>
          <div className="step step-1">1</div>
          <div className="step step-2">2</div>
          <div className="step step-3">3</div>
          <div className="step step-4">4</div>
        </div> */}
        <form onSubmit={(e) => onSubmit(e, createStudent)}>
          {formState === 0 && (
            <div className="personal">
              <h2>Personal</h2>
              <SelectInput
                label="Gender"
                {...register("gender")}
                options={[
                  { name: "Male", value: "male" },
                  { name: "Female", value: "female" },
                  { name: "Other", value: "other" },
                ]}
                errMsg={errors["gender"]}
              />
              <TextField
                label="Address"
                errorMsg={errors["address"]}
                {...register("address")}
              />
              <TextField
                label="Phone"
                errorMsg={errors["phone"]}
                {...register("phone")}
              />
              <TextField
                type="date"
                label="DOB"
                errorMsg={errors["dob"]}
                {...register("dob")}
              />
            </div>
          )}
          {formState === 1 && (
            <div className="student">
              <h2>Student</h2>
              <TextField
                label="Register No"
                placeholder="MGP..."
                errorMsg={errors["regNO"]}
                {...register("regNO")}
              />
              <TextField
                label="Admission No"
                errorMsg={errors["admNO"]}
                {...register("admNO")}
              />
              <SelectInput
                label="Batch"
                options={batches.map((batch) => ({ value: batch }))}
                {...register("batch")}
                errMsg={errors["batch"]}
              />
              <SelectInput
                label="Branch"
                options={branches.map((branch) => ({ value: branch }))}
                {...register("branch")}
                errMsg={errors["branch"]}
              />
            </div>
          )}
          {formState === 2 && (
            <div className="education">
              <h2>Educational</h2>
              <TextField
                label="Skills"
                placeholder="comma seperated list"
                {...register("skills")}
                errorMsg={errors["skills"]}
              />
              <TextField
                label="12th School"
                {...register("twelthSchool")}
                errorMsg={errors["twelthSchool"]}
              />
              <TextField
                label="12th Percentage"
                {...register("twelthPercentage")}
                errorMsg={errors["twelthPercentage"]}
              />
              <TextField
                label="10th School"
                errorMsg={errors["tenthSchool"]}
                {...register("tenthSchool")}
              />
              <TextField
                label="10th Percentage"
                errorMsg={errors["tenthPercentage"]}
                {...register("tenthPercentage")}
              />
            </div>
          )}
          {formState === 3 && (
            <div className="semester">
              <h2>Academic</h2>
              <div className="set">
                {["S1", "S2", "S3"].map((sem) => (
                  <TextField
                    placeholder="0 If not attempted"
                    key={sem}
                    label={sem}
                    errorMsg={errors[`sgpa${sem}`]}
                    {...register(`sgpa${sem}`)}
                  />
                ))}
              </div>
              <div className="set">
                {["S4", "S5", "S6"].map((sem) => (
                  <TextField
                    placeholder="0 If not attempted"
                    key={sem}
                    label={sem}
                    errorMsg={errors[`sgpa${sem}`]}
                    {...register(`sgpa${sem}`)}
                  />
                ))}
              </div>
              <div className="set">
                {["S7", "S8"].map((sem) => (
                  <TextField
                    placeholder="0 If not attempted"
                    key={sem}
                    label={sem}
                    errorMsg={errors[`sgpa${sem}`]}
                    {...register(`sgpa${sem}`)}
                  />
                ))}
                <TextField
                  placeholder="0 If not attempted"
                  label="CGPA"
                  errorMsg={errors["cgpa"]}
                  {...register("cgpa")}
                />
              </div>
              <div className="set" id="4">
                <TextField
                  label="Current Backlogs"
                  placeholder="# Current Backlogs"
                  errorMsg={errors["currentBacklogs"]}
                  {...register("currentBacklogs")}
                />
                <TextField
                  label="Backlog History"
                  placeholder="# Cleared & Uncleared"
                  errorMsg={errors["backlogHistory"]}
                  {...register("backlogHistory")}
                />
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
              <button type="submit" id="submit-btn">
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
