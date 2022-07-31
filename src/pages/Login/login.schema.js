import { object, string, addMethod } from "yup";

addMethod(string, "addDomain", function (domain) {
  return this.transform((value) => (domain ? `${value}${domain}` : value));
});

const loginSchema = object().shape({
  email: string()
    .email("Please enter a valid Email address.")
    .required("Email is required.")
    .addDomain("@saintgits.org")
    .matches(/@saintgits.org$/, "Please provide your Saintgits Email ID."),
  password: string()
    .required("Password is required")
    .min(8, "Password Must be 8 characters long")
    .max(24, "Password should be less than 24 characters"),
});

export default loginSchema;
