import { object, string } from "yup";

const advisorRegisterSchema = object().shape({
  batch: string().required("Batch is required"),
  branch: string().required("Branch is required"),
});

export default advisorRegisterSchema;
