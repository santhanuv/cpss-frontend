import Styled from "../EditProfile.Styled";
import TextField from "../../../../components/TextField";
import { MdClose } from "react-icons/md";
import Button from "../../../../components/Button";
import useForm from "../../../../hooks/useForm";
import { object, shape, string } from "yup";

const editBacklogSchema = object().shape({
  current_backlogs: string().matches(/\d{1,2}/, "Should be a number"),
  backlog_history: string().matches(/\d{1,2}/, "Should be a number"),
});

const EditBacklog = ({
  closeCallback = () => {},
  autoFillData,
  formSchema,
  formCallBack,
}) => {
  const { register, onSubmit, errors } = useForm(
    autoFillData,
    editBacklogSchema
  );

  return (
    <Styled>
      <div className="head-section">
        <h1>Edit Backlogs Info</h1>
        <button className="close-btn" onClick={() => closeCallback("backlogs")}>
          <MdClose className="icon" />
        </button>
      </div>
      <div className="content">
        <form onSubmit={(e) => onSubmit(e, formCallBack)}>
          <TextField
            label="Current Backlogs"
            errorMsg={errors["current_backlogs"]}
            {...register("current_backlogs")}
          />
          <TextField
            label="Backlog History"
            errorMsg={errors["backlog_history"]}
            {...register("backlog_history")}
          />
          <div className="save-btn-box">
            <Button text="Save" />
          </div>
        </form>
      </div>
    </Styled>
  );
};

export default EditBacklog;
