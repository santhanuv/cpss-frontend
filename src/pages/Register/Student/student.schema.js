import { object, string, date, number } from "yup";
import { subYears } from "date-fns";
const minAgeYear = 18;

const studentRegisterSchema = object().shape({
  gender: string()
    .required("Gender is required.")
    .oneOf(["male", "female", "other"]),
  address: string().required("Address is required."),
  phone: string()
    .length(10, "Enter a valid Phone Number.")
    .required("Phone number is required.")
    .matches(/^[6-9]\d{9}$/, "Enter a valid Phone Number"),
  dob: date()
    .typeError("Date of Birth should be a valid date")
    .max(
      subYears(new Date(), minAgeYear),
      `Should be atleast ${minAgeYear} years old`
    )
    .required("Date of Birth is required"),
  regNO: string()
    .required("Register No is required")
    .matches(/^MGP/, "Enter valid University Register NO"),
  admNO: string().required("Admission No is required"),
  batch: string().required("Batch is required"),
  branch: string().required("Branch is required"),
  skills: string(),
  twelthSchool: string().required("Twelth School is required."),
  twelthPercentage: string()
    .required("Twelth Percentage is required.")
    .matches(/\d{1,3}\.\d{1,2}/, "Enter valid percentage score"),
  tenthSchool: string().required("Tenth School is required."),
  tenthPercentage: string()
    .required("Tenth Percentage is required.")
    .matches(/\d{1,3}\.\d{1,2}/, "Enter valid percentage score"),
  sgpaS1: string().matches(/\d{1,2}\.\d{1,2}|\d{1}/, "Enter a valid score"),
  sgpaS2: string().matches(/\d{1,2}\.\d{1,2}|\d{1}/, "Enter a valid score"),
  sgpaS3: string().matches(/\d{1,2}\.\d{1,2}|\d{1}/, "Enter a valid score"),
  sgpaS4: string().matches(/\d{1,2}\.\d{1,2}|\d{1}/, "Enter a valid score"),
  sgpaS5: string().matches(/\d{1,2}\.\d{1,2}|\d{1}/, "Enter a valid score"),
  sgpaS6: string().matches(/\d{1,2}\.\d{1,2}|\d{1}/, "Enter a valid score"),
  sgpaS7: string().matches(/\d{1,2}\.\d{1,2}|\d{1}/, "Enter a valid score"),
  sgpaS8: string().matches(/\d{1,2}\.\d{1,2}|\d{1}/, "Enter a valid score"),
  cgpa: string().matches(/\d{1,2}\.\d{1,2}|\d{1}/, "Enter a valid score"),
  currentBacklogs: string().matches(/\d{1,2}/, "Should be a number"),
  backlogHistory: string().matches(/\d{1,2}/, "Should be a number"),
});

export default studentRegisterSchema;
