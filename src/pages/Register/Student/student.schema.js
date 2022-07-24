import { object, string, date, number, addMethod } from "yup";
import { subYears } from "date-fns";
const minAgeYear = 18;

const gpaRegex = /^\s*$|^\d{1}\.\d{1,2}$|^\d{1}$|^10(.0{1,2})?$/;
const backlogRegex = /\d{1,2}/;

addMethod(string, "removeEmptyValue", function () {
  return this.transform((value) => (value ? value : undefined));
});

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
    .matches(
      /^\s*\d{1,2}\.\d{1,2}\s*$|^\d{1,2}$|^[1]\d{1,2}$/,
      "Enter valid percentage score"
    ),
  tenthSchool: string().required("Tenth School is required."),
  tenthPercentage: string()
    .required("Tenth Percentage is required.")
    .matches(
      /^\s*\d{1,2}\.\d{1,2}\s*$|^\d{1,2}$|^[1]\d{1,2}$/,
      "Enter valid percentage score"
    ),
  sgpaS1: string()
    .matches(gpaRegex, "Enter a valid score")
    .removeEmptyValue()
    .default("0"),
  sgpaS2: string()
    .matches(gpaRegex, "Enter a valid score")
    .removeEmptyValue()
    .default("0"),
  sgpaS3: string()
    .matches(gpaRegex, "Enter a valid score")
    .removeEmptyValue()
    .default("0"),
  sgpaS4: string()
    .matches(gpaRegex, "Enter a valid score")
    .removeEmptyValue()
    .default("0"),
  sgpaS5: string()
    .matches(gpaRegex, "Enter a valid score")
    .removeEmptyValue()
    .default("0"),
  sgpaS6: string()
    .matches(gpaRegex, "Enter a valid score")
    .removeEmptyValue()
    .default("0"),
  sgpaS7: string()
    .matches(gpaRegex, "Enter a valid score")
    .removeEmptyValue()
    .default("0"),
  sgpaS8: string()
    .matches(gpaRegex, "Enter a valid score")
    .removeEmptyValue()
    .default("0"),
  cgpa: string()
    .matches(gpaRegex, "Enter a valid score")
    .removeEmptyValue()
    .default("0"),
  currentBacklogs: string()
    .matches(backlogRegex, "Should be a number")
    .removeEmptyValue()
    .default("0"),
  backlogHistory: string()
    .matches(backlogRegex, "Should be a number")
    .removeEmptyValue()
    .default("0"),
});

export default studentRegisterSchema;
