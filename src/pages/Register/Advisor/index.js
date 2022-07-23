import { useState, useEffect } from "react";
import Styled from "./Styled";
import TextField from "../../../components/TextField";
import SelectInput from "../../../components/SelectInput";
import { getAllBatches } from "../../../api/batch";
import { getAllBranches } from "../../../api/branch";
import useForm from "../../../hooks/useForm";
import advisorRegisterSchema from "./advisorRegisterSchema";
import useAuthAxios from "../../../hooks/useAuthAxios";
import { registerAdvisor } from "../../../api/advisory";
import { useNavigate } from "react-router-dom";

const AdvisorRegister = () => {
  const [branches, setBranches] = useState([]);
  const [batches, setBatches] = useState([]);
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
        alert("You need to be approved by advisors");
        navigate("/logout");
      } else if (err) {
        console.error(err);
        if (err.response.status === 409)
          alert(`Advisor for ${data.branch} ${data.batch} already exits.`);
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
      <h1>Advisor Registeration</h1>
      <div className="register-card">
        <form onSubmit={(e) => onSubmit(e, postData)}>
          <div className="student">
            {/* <TextField label="Employee No" errorMsg="" /> */}
            <SelectInput
              label="Batch"
              errMsg={errors["batch"]}
              {...register("batch")}
              options={batches.map((batch) => ({ value: batch }))}
            />
            <SelectInput
              label="Branch"
              {...register("branch")}
              errMsg={errors["branch"]}
              options={branches.map((branch) => ({ value: branch }))}
            />
          </div>

          <div className="action-btns">
            <button type="submit" id="submit-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </Styled>
  );
};

export default AdvisorRegister;
