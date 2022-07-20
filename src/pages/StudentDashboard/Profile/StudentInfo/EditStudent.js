import Styled from "../EditProfile.Styled";
import TextField from "../../../../components/TextField";
import { MdClose } from "react-icons/md";
import SelectInput from "../../../../components/SelectInput";
import Button from "../../../../components/Button";
import useForm from "../../../../hooks/useForm";
import { useEffect, forwardRef, useState } from "react";
import useAuthAxios from "../../../../hooks/useAuthAxios";
import { getAllBatches } from "../../../../api/batch";
import { getAllBranches } from "../../../../api/branch";
import { object, string } from "yup";

const editStudentSchema = object().shape({
  register_no: string()
    .required("Register No is required")
    .matches(/^MGP/, "Enter valid University Register NO"),
  adm_no: string().required("Admission No is required"),
  batch: string().required("Batch is required"),
  branch: string().required("Branch is required"),

  twelth_school: string().required("Twelth School is required."),
  twelth_percentage: string()
    .required("Twelth Percentage is required.")
    .matches(/\d{1,3}\.\d{1,2}/, "Enter valid percentage score"),
  tenth_school: string().required("Tenth School is required."),
  tenth_percentage: string()
    .required("Tenth Percentage is required.")
    .matches(/\d{1,3}\.\d{1,2}/, "Enter valid percentage score"),
});

const EditStudent = ({
  closeCallback = () => {},
  autoFillData,
  formSchema,
  formCallBack,
}) => {
  const { register, onSubmit, errors } = useForm(
    autoFillData,
    editStudentSchema
  );
  const axios = useAuthAxios();

  const [branches, setBranches] = useState([]);
  const [batches, setBatches] = useState([]);

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
      <div className="head-section">
        <h1>Edit Student Info</h1>
        <button className="close-btn" onClick={() => closeCallback("student")}>
          <MdClose className="icon" />
        </button>
      </div>
      <div className="content">
        <form onSubmit={(e) => onSubmit(e, formCallBack)}>
          <TextField
            label="Register NO"
            errorMsg={errors["register_no"]}
            {...register("register_no")}
          />
          <TextField
            label="Admission NO"
            errorMsg={errors["adm_no"]}
            {...register("adm_no")}
          />
          <SelectInput
            label={"Branch"}
            errMsg={errors["branch"]}
            options={branches.map((branch) => ({
              value: branch,
            }))}
            {...register("branch")}
          />
          <SelectInput
            label="Batch"
            options={batches.map((batch) => ({ value: batch }))}
            errorMsg={errors["batch"]}
            {...register("batch")}
          />
          <TextField
            label="10th School"
            errorMsg={errors["tenth_school"]}
            {...register("tenth_school")}
          />
          <TextField
            label="10th Percentage"
            errorMsg={errors["tenth_percentage"]}
            {...register("tenth_percentage")}
          />
          <TextField
            label="12th School"
            errorMsg={errors["twelth_school"]}
            {...register("twelth_school")}
          />
          <TextField
            label="12th Percentage"
            errorMsg={errors["twelth_percentage"]}
            {...register("twelth_percentage")}
          />

          <div className="save-btn-box">
            <Button text="Save" />
          </div>
        </form>
      </div>
    </Styled>
  );
};

export default EditStudent;
