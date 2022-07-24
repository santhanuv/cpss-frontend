import { useState, useEffect } from "react";
import Styled from "./Styled";
import TextField from "../../../components/TextField";
import Dropdown from "../../../components/Dropdown";
import { getAllBatches } from "../../../api/batch";
import { getAllBranches } from "../../../api/branch";
import useForm from "../../../hooks/useForm";
import advisorRegisterSchema from "./advisorRegisterSchema";
import useAuthAxios from "../../../hooks/useAuthAxios";
import { registerAdvisor } from "../../../api/advisory";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import AlertDialog from "../../../components/AlertDialog";

const AdvisorRegister = () => {
  const [branches, setBranches] = useState([]);
  const [batches, setBatches] = useState([]);
  const [alertOpen, setAlertOpen] = useState({
    state: false,
    status: false,
    msg: "",
  });
  const navigate = useNavigate();
  const axios = useAuthAxios();
  const { register, onSubmit, errors } = useForm(
    { branch: "", batch: "" },
    advisorRegisterSchema
  );

  const postData = async (data) => {
    try {
      const { response, err } = await registerAdvisor(axios, data);

      if (response) {
        console.log(response.data);
        setAlertOpen({
          state: true,
          status: true,
          msg: "You are successfully registered. Please wait for the approval of admin.",
        });
      } else if (err) {
        console.error(err);
        if (err.response.status === 422)
          setAlertOpen({
            state: true,
            status: false,
            msg: "Advisor already exits for the given branch and batch.",
          });
      }
    } catch (err) {
      console.error(err);
    }
  };

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

  return (
    <Styled>
      <AlertDialog
        state={alertOpen.state}
        status={alertOpen.status}
        msg={alertOpen.msg}
        onBtnClick={() => {
          if (alertOpen.status) navigate("/logout");
          else setAlertOpen((prev) => ({ ...prev, state: false }));
        }}
      />
      <div className="register-card">
        <div className="left-box">
          <h1>Advisor Registeration</h1>
          <p>Please Enter the following details to register.</p>
        </div>
        <form onSubmit={(e) => onSubmit(e, postData)}>
          <div className="student">
            {/* <TextField label="Employee No" errorMsg="" /> */}
            <Dropdown
              label="Batch"
              errMsg={errors["batch"]}
              {...register("batch")}
              options={batches.map((batch) => ({ name: batch, value: batch }))}
            />
            <Dropdown
              label="Branch"
              {...register("branch")}
              errMsg={errors["branch"]}
              options={branches.map((branch) => ({
                name: branch,
                value: branch,
              }))}
            />
          </div>

          <div className="action-btns">
            <Button text="Submit" />
          </div>
        </form>
      </div>
    </Styled>
  );
};

export default AdvisorRegister;
