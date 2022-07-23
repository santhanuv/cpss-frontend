import React, { useState } from "react";
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import GoogleButton from "../../components/Button/GoogleButton";
import Seperator from "./Seperator";
import Link from "../../components/Link";
import { StyledTagline, StyledHeading } from "./StyledText";
import Navbar from "../../components/Navbar";
import { StyledLeftLayout, StyledRightLayout } from "./StyledLayout";
import Wrapper from "../../components/Wrapper";
import { LoginCard, ContentWrapper } from "./Wrapper";
import { ForgotSection } from "./Section";
import useForm from "../../hooks/useForm";
import { createSession } from "../../api/session";
import useAuth from "../../hooks/useAuth";
import { useNavigate, useLocation } from "react-router-dom";
import loginSchema from "./login.schema";

const initForm = {
  email: "",
  password: "",
};

const Login = () => {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname;

  const { onSubmit, errors, register } = useForm(initForm, loginSchema);

  const doAuth = async (data) => {
    try {
      const { response, err } = await createSession(data);
      if (response) {
        const authData = {
          accessToken: response.data?.accessToken,
          role: response.data?.role,
          status: response.data?.status,
        };

        setAuth(authData);
        const to = authData.role ? `/${authData.role}` : `/error`;
        navigate(from || to, { replace: true });
        return true;
      } else {
        if (err.response.status === 401) alert("Invalid email or password.");
        else alert("Server Error!");
        console.error(err);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const linksList = [
    {
      name: "Login",
      to: "#",
      isActive: true,
      id: "1",
    },
    {
      name: "Register",
      to: "/register",
      isActive: false,
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

  return (
    <Wrapper>
      <Navbar links={linksList} />
      <ContentWrapper>
        <LoginCard>
          <StyledLeftLayout>
            <StyledHeading>Login</StyledHeading>
            <StyledTagline>Welcome back!</StyledTagline>
            <br />
            <StyledTagline>
              By logging in, you agree to our
              <br />
              <Link isLight={true}>Terms of Use</Link> and
              <Link isLight={true}> Privacy Policy.</Link>
            </StyledTagline>
          </StyledLeftLayout>
          <StyledRightLayout>
            <Button varient="google" />
            <Seperator />
            <form onSubmit={(e) => onSubmit(e, doAuth)}>
              <TextField
                label="Email"
                type="email"
                errorMsg={errors["email"]}
                isRequired={true}
                {...register("email")}
              />
              <TextField
                label="Password"
                errorMsg={errors["password"]}
                type="password"
                errorState={true}
                isRequired={true}
                {...register("password")}
              />
              <ForgotSection>
                <Link text="Forgot Password ?" />
              </ForgotSection>
              <Button text="Login" />
            </form>
          </StyledRightLayout>
        </LoginCard>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Login;
