import { useState } from "react";
import Navbar from "../../components/Navbar";
import StyledRegister from "./Register.Styled";
import Wrapper from "../../components/Wrapper";
import TextField from "../../components/TextField";
import useForm from "../../hooks/useForm";
import SelectInput from "../../components/SelectInput";
import Link from "../../components/Link";

const linksList = [
  {
    name: "Login",
    to: "/login",
    isActive: false,
    id: "1",
  },
  {
    name: "Regsiter",
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

const roleOptions = [{ value: "Student" }, { value: "Advisor" }];

const Regsiter = () => {
  const { register, onSubmit } = useForm(formInitValue);

  const [formState, setFormState] = useState(0);

  const handleNext = (e) => {
    e.preventDefault();
    setFormState((prev) => (prev !== 2 ? prev + 1 : prev));
  };

  const handleBack = (e) => {
    e.preventDefault();
    setFormState((prev) => (prev !== 0 ? prev - 1 : prev));
  };

  return (
    <Wrapper>
      <StyledRegister>
        <Navbar links={linksList} />
        <div className="content">
          <div className="card">
            <aside>
              <h1>Register</h1>
              <p>
                By signing up, you agree to our{" "}
                <Link isLight={true}>Terms of Use</Link>
                <br /> and
                <br />
                <Link isLight={true}> Privacy Policy.</Link>
              </p>
            </aside>
            <form
              className="form-box"
              onSubmit={(e) =>
                onSubmit(e, (data) => {
                  console.log(data);
                })
              }
            >
              {formState === 0 && (
                <>
                  <p>Please provide your Role and Email address.</p>

                  <SelectInput
                    options={roleOptions}
                    {...register("role")}
                    label="Role"
                  />
                  <TextField
                    label="Email"
                    type="email"
                    errorMsg=""
                    {...register("email")}
                  />

                  <div className="btn-box">
                    {formState !== 0 && (
                      <button className="back" onClick={handleBack}>
                        Back
                      </button>
                    )}
                    <button className="next" onClick={handleNext}>
                      Next
                    </button>
                  </div>
                </>
              )}
              {formState === 1 && (
                <>
                  <p>Please provide your name.</p>

                  <TextField
                    label="First Name"
                    type="text"
                    errorMsg=""
                    {...register("firstName")}
                  />
                  <TextField
                    label="Last Name"
                    type="text"
                    errorMsg=""
                    {...register("lastName")}
                  />

                  <div className="btn-box">
                    {formState !== 0 && (
                      <button className="back" onClick={handleBack}>
                        Back
                      </button>
                    )}
                    <button className="next" onClick={handleNext}>
                      Next
                    </button>
                  </div>
                </>
              )}
              {formState === 2 && (
                <>
                  <p>Choose a password.</p>

                  <TextField
                    label="Password"
                    type="password"
                    errorMsg=""
                    {...register("password")}
                  />
                  <TextField
                    label="Confirm Password"
                    type="password"
                    errorMsg=""
                    {...register("confirmPassword")}
                  />

                  {/* <Button text={"Register"} /> */}
                  <div className="btn-box">
                    {formState !== 0 && (
                      <button className="back" onClick={handleBack}>
                        Back
                      </button>
                    )}
                    <button className="register">Register</button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </StyledRegister>
    </Wrapper>
  );
};

export default Regsiter;
