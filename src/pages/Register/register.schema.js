import { object, ref, string, addMethod } from "yup";

addMethod(string, "addDomain", function (domain) {
  return this.transform((value) => (domain ? `${value}${domain}` : value));
});

const registerSchema = object().shape({
  role: string().required("Role is required").oneOf(["student", "advisor"]),
  firstName: string()
    .required("First Name is Required")
    .min(3, "First Name should be atleast 3 characters"),
  lastName: string().required("Last Name is required"),
  email: string()
    .email("Please enter a valid Email address.")
    .required("Email is required.")
    .addDomain("@saintgits.org")
    .matches(/@saintgits.org$/, "Please provide your Saintgits Email ID."),
  password: string()
    .required("Password is required")
    .min(8, "Password Must be 8 characters long")
    .max(24, "Password should be less than 24 characters"),
  confirmPassword: string()
    .oneOf([ref("password"), null], "Password doesn't match")
    .required("Confirm Password is required"),
});

export default registerSchema;
