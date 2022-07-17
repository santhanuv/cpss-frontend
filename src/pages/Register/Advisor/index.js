import { useState } from "react";
import Styled from "./Styled";
import TextField from "../../../components/TextField";
import SelectInput from "../../../components/SelectInput";

const AdvisorRegister = () => {
  const [formState, setFormState] = useState();

  return (
    <Styled>
      <h1>Advisor Registeration</h1>
      <div className="register-card">
        <form>
          <div className="student">
            <TextField label="Employee No" errorMsg="" />
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

          <div className="action-btns">
            <button onClick={(e) => e.preventDefault()} id="submit-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </Styled>
  );
};

export default AdvisorRegister;
