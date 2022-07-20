import Styled from "../EditProfile.Styled";
import TextField from "../../../../components/TextField";
import { MdClose } from "react-icons/md";
import SelectInput from "../../../../components/SelectInput";
import Button from "../../../../components/Button";
import useForm from "../../../../hooks/useForm";
import { object, string } from "yup";

const editSkillsSchema = object().shape({
  skills: string(),
});

const EditSkills = ({
  closeCallback = () => {},
  autoFillData,
  formSchema,
  formCallBack,
}) => {
  const { register, onSubmit, errors } = useForm(
    autoFillData,
    editSkillsSchema
  );

  return (
    <Styled>
      <div className="head-section">
        <h1>Edit Skills</h1>
        <button className="close-btn" onClick={() => closeCallback("skills")}>
          <MdClose className="icon" />
        </button>
      </div>
      <div className="content">
        <form onSubmit={(e) => onSubmit(e, formCallBack)}>
          <TextField
            label="Skills"
            placeholder="comma seperated list"
            errorMsg={errors["skills"]}
            {...register("skills")}
          />
          <div className="save-btn-box">
            <Button text="Save" />
          </div>
        </form>
      </div>
    </Styled>
  );
};

export default EditSkills;
