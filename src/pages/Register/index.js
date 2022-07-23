import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import StyledRegister from "./Register.Styled";
import Wrapper from "../../components/Wrapper";
import TextField from "../../components/TextField";
import useForm from "../../hooks/useForm";
import SelectInput from "../../components/SelectInput";
import Link from "../../components/Link";
import registerSchema from "./register.schema";
import { registerUser } from "../../api/user";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

const linksList = [
  {
    name: "Login",
    to: "/login",
    isActive: false,
    id: "1",
  },
  {
    name: "Register",
    to: "#",
    isActive: true,
    id: "2",
  },
  {
    name: "Contact us",
    to: "#",
    isActive: false,
    id: "3",
  },
  {
    name: "About us",
    to: "#",
    isActive: false,
    id: "4",
  },
];

const formInitValue = {
  role: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const roleOptions = [
  { name: "Student", value: "student" },
  { name: "Advisor", value: "advisor" },
];

const Regsiter = () => {
  const [btnActive, setBtnActive] = useState(false);
  const { register, onSubmit, errors, resetFormData, formData, isSubmitReady } =
    useForm(formInitValue, registerSchema);
  const navigate = useNavigate();

  useEffect(() => {
    const ready = isSubmitReady([
      "role",
      "firstName",
      "lastName",
      "password",
      "confirmPassword",
    ]);
    setBtnActive(ready);
  }, [formData, errors]);

  const postData = async ({ firstName, lastName, email, password, role }) => {
    try {
      const { response, err } = await registerUser({
        firstName,
        lastName,
        email,
        password,
        role,
      });

      if (response) {
        console.log(response);
        resetFormData();
        navigate(`/login`);
      }

      if (err) {
        console.log(err);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Wrapper>
      <StyledRegister>
        <Navbar links={linksList} />
        <div className="content">
          <div className="card">
            <div className="left-box">
              <h1>Register</h1>
              <p>
                By signing up, you agree to our <br />
                <Link isLight={true}>Terms of Use</Link> and
                <Link isLight={true}> Privacy Policy.</Link>
              </p>
            </div>
            <form className="form-box" onSubmit={(e) => onSubmit(e, postData)}>
              <SelectInput
                options={roleOptions}
                {...register("role")}
                label="Role"
                errMsg={errors["role"]}
              />
              <TextField
                label="Email"
                type="email"
                errorMsg={errors["email"]}
                {...register("email")}
              />

              <TextField
                label="First Name"
                type="text"
                errorMsg={errors["firstName"]}
                {...register("firstName")}
              />
              <TextField
                label="Last Name"
                type="text"
                errorMsg={errors["lastName"]}
                {...register("lastName")}
              />

              <TextField
                label="Password"
                type="password"
                errorMsg={errors["password"]}
                {...register("password")}
              />
              <TextField
                label="Confirm Password"
                type="password"
                errorMsg={errors["confirmPassword"]}
                {...register("confirmPassword")}
              />

              <Button type="submit" className="register" isActive={btnActive}>
                Register
              </Button>
            </form>
          </div>
        </div>
      </StyledRegister>
    </Wrapper>
  );
};

export default Regsiter;
