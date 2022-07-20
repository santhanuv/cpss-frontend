import Styled from "../EditProfile.Styled";
import TextField from "../../../../components/TextField";
import { MdClose } from "react-icons/md";

import Button from "../../../../components/Button";
import useForm from "../../../../hooks/useForm";

import { object, string } from "yup";

const editSemesterSchema = object().shape({
  sgpa_s1: string().matches(/\d{1,2}\.\d{1,2}|\d{1}/, "Enter a valid score"),
  sgpa_s2: string().matches(/\d{1,2}\.\d{1,2}|\d{1}/, "Enter a valid score"),
  sgpa_s3: string().matches(/\d{1,2}\.\d{1,2}|\d{1}/, "Enter a valid score"),
  sgpa_s4: string().matches(/\d{1,2}\.\d{1,2}|\d{1}/, "Enter a valid score"),
  sgpa_s5: string().matches(/\d{1,2}\.\d{1,2}|\d{1}/, "Enter a valid score"),
  sgpa_s6: string().matches(/\d{1,2}\.\d{1,2}|\d{1}/, "Enter a valid score"),
  sgpa_s7: string().matches(/\d{1,2}\.\d{1,2}|\d{1}/, "Enter a valid score"),
  sgpa_s8: string().matches(/\d{1,2}\.\d{1,2}|\d{1}/, "Enter a valid score"),
  cgpa: string().matches(/\d{1,2}\.\d{1,2}|\d{1}/, "Enter a valid score"),
});

const SemesterGrades = ({
  closeCallback = () => {},
  autoFillData,
  formSchema,
  formCallBack,
}) => {
  const { register, onSubmit, errors } = useForm(
    autoFillData,
    editSemesterSchema
  );

  return (
    <Styled>
      <div className="head-section">
        <h1>Edit Semester Grades</h1>
        <button className="close-btn" onClick={() => closeCallback("semester")}>
          <MdClose className="icon" />
        </button>
      </div>
      <div className="content">
        <form onSubmit={(e) => onSubmit(e, formCallBack)}>
          <TextField
            label="S1 SGPA"
            errorMsg={errors["sgpas_1"]}
            {...register("sgpa_s1")}
          />
          <TextField
            label="S2 SGPA"
            errorMsg={errors["sgpas_2"]}
            {...register("sgpa_s2")}
          />
          <TextField
            label="S3 SGPA"
            errorMsg={errors["sgpas_3"]}
            {...register("sgpa_s3")}
          />
          <TextField
            label="S4 SGPA"
            errorMsg={errors["sgpas_4"]}
            {...register("sgpa_s4")}
          />
          <TextField
            label="S5 SGPA"
            errorMsg={errors["sgpas_5"]}
            {...register("sgpa_s5")}
          />
          <TextField
            label="S6 SGPA"
            errorMsg={errors["sgpas_6"]}
            {...register("sgpa_s6")}
          />
          <TextField
            label="S7 SGPA"
            errorMsg={errors["sgpas_7"]}
            {...register("sgpa_s7")}
          />
          <TextField
            label="S8 SGPA"
            errorMsg={errors["sgpas_8"]}
            {...register("sgpa_s8")}
          />
          <TextField
            label="CGPA"
            errorMsg={errors["cgpa"]}
            {...register("cgpa")}
          />

          <div className="save-btn-box">
            <Button text="Save" />
          </div>
        </form>
      </div>
    </Styled>
  );
};

export default SemesterGrades;
