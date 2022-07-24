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
import ProgressBar from "../../../components/ProgressBar";
import Button from "../../../components/Button";
import Dropdown from "../../../components/Dropdown";
import Avatar from "../../../components/Avatar";
import AlertDialog from "../../../components/AlertDialog";
import { FiCheckCircle } from "react-icons/fi";
import { MdOutlineError } from "react-icons/md";

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

const fieldsInStep = [
  ["gender", "address", "phone", "dob"],
  ["regNO", "admNO", "batch", "branch"],
  ["twelthSchool", "twelthPercentage", "tenthSchool", "tenthPercentage"],
  [
    "sgpaS1",
    "sgpaS2",
    "sgpaS3",
    "sgpaS4",
    "sgpaS5",
    "sgpaS6",
    "sgpaS7",
    "sgpaS8",
    "cgpa",
    "currentBacklogs",
    "backlogHistory",
  ],
];

const StudentRegister = () => {
  const [formState, setFormState] = useState(0);
  const [branches, setBranches] = useState([]);
  const [batches, setBatches] = useState([]);
  const [activeBtn, setActiveBtn] = useState(false);
  const [alertOpen, setAlertOpen] = useState({
    state: false,
    status: false,
    msg: "",
  });

  const navigate = useNavigate();
  const axios = useAuthAxios();
  const {
    register,
    errors,
    formData,
    onSubmit,
    onNextValidate,
    isSubmitReady,
    setErrors,
  } = useForm(initialFormData, studentRegisterSchema, fieldsInStep[formState]);

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

  useEffect(() => {
    setActiveBtn(isSubmitReady(fieldsInStep[formState]));
  }, [formData, errors]);

  const createStudent = async (data) => {
    try {
      const { response, err } = await registerStudent(axios, data);

      if (response) {
        console.log(response);
        if (response.status === 201) {
          setAlertOpen({
            state: true,
            status: true,
            msg: "Your profile has been successfully registered.",
          });
        }
      } else if (err) {
        const errorMsg = err.response.data.msg;
        const value = err.response.data.value;

        const key = Object.keys(formData).find(
          (key) => formData[key] === value
        );
        if (key) {
          const formIndex = fieldsInStep
            .map((fields, index) => (fields.indexOf(key) >= 0 ? index : -1))
            .filter((value) => value !== -1)[0];

          setErrors((prev) => ({ ...prev, [key]: errorMsg }));
          formIndex >= 0 && setFormState(formIndex);
        }
        setAlertOpen({ state: true, status: false, msg: errorMsg });
        console.error(err.response);
      }
    } catch (err) {
      console.log(err.response.msg);
    }
  };

  const handleNext = async (e) => {
    e.preventDefault();
    await onNextValidate(() => {
      setFormState((prev) => (prev !== 3 ? prev + 1 : prev));
    });
  };

  const handleBack = (e) => {
    e.preventDefault();
    setActiveBtn(() => {
      setFormState((prev) => (prev !== 0 ? prev - 1 : prev));
    });
  };

  return (
    <Styled>
      <AlertDialog
        state={alertOpen.state}
        status={alertOpen.status}
        msg={alertOpen.msg}
        onBtnClick={() => {
          if (alertOpen.status) navigate("/student", { replace: true });
          else setAlertOpen((prev) => ({ ...prev, state: false }));
        }}
      />

      <Avatar className="avatar" />
      <div className="register-card">
        <div className="progress-bar-wrapper">
          <ProgressBar
            steps={["Personal", "Academic", "Education", "Curriculum"]}
            currentStep={formState}
          />
        </div>
        <div className="content-box">
          <div className="left-box">
            <h1>
              Set Your Profile
              <p className="subtext">Welcome!!</p>
            </h1>
            <p>
              Please Enter the following details to set your Student Profile.
            </p>
          </div>
          <form onSubmit={(e) => onSubmit(e, createStudent)}>
            {formState === 0 && (
              <div className="personal">
                <h2>Personal</h2>
                <Dropdown
                  label="Gender"
                  options={[
                    { name: "Male", value: "male" },
                    { name: "Female", value: "female" },
                    { name: "Other", value: "other" },
                  ]}
                  errMsg={errors["gender"]}
                  {...register("gender")}
                />
                {/* <SelectInput
                  label="Gender"
                  {...register("gender")}
                  options={[
                    { name: "Male", value: "male" },
                    { name: "Female", value: "female" },
                    { name: "Other", value: "other" },
                  ]}
                  errMsg={errors["gender"]}
                /> */}
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
                <Dropdown
                  label="Batch"
                  options={batches.map((batch) => ({
                    name: batch,
                    value: batch,
                  }))}
                  {...register("batch")}
                  errMsg={errors["batch"]}
                />
                <Dropdown
                  label="Branch"
                  options={branches.map((branch) => ({
                    name: branch,
                    value: branch,
                  }))}
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
                <div className="schooling">
                  <TextField
                    label="12th School"
                    {...register("twelthSchool")}
                    errorMsg={errors["twelthSchool"]}
                  />
                  <TextField
                    className="mark"
                    label="12th Percentage"
                    {...register("twelthPercentage")}
                    errorMsg={errors["twelthPercentage"]}
                  />
                </div>
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
                <h3>Semester Marks</h3>
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
                <Button onClick={handleBack} className="control-btn left-btn">
                  Back
                </Button>
              )}
              {formState !== 3 && (
                <Button
                  onClick={handleNext}
                  className="control-btn right-btn"
                  isActive={activeBtn}
                >
                  Next
                </Button>
              )}
              {formState === 3 && (
                <Button type="submit" className="control-btn right-btn">
                  Submit
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </Styled>
  );
};

export default StudentRegister;
