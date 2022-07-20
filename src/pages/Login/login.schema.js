import { object, string } from "yup";

const loginSchema = object().shape({
  email: string()
    .email("Please enter a valid Email address.")
    .required("Email is required.")
    .matches(/@saintgits.org$/, "Please provide your Saintgits Email ID."),
  password: string()
    .required("Password is required")
    .min(8, "Password Must be 8 characters long")
    .max(24, "Password should be less than 24 characters"),
});

export default loginSchema;
