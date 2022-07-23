import { object, string } from "yup";

const fitlerSchema = object().shape({
  batch: string().required("Batch is required"),
  minCGPA: string().matches(/\d{1,2}\.\d{1,2}|\d{1}/, "Enter a valid score"),
  currentBacklogs: string()
    .matches(/\d{1,2}/, "Should be a number")
    .nullable(true),
  backlogHistory: string()
    .matches(/\d{1,2}/, "Should be a number")
    .nullable(true),
});

export default fitlerSchema;
