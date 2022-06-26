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

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleInputchange = (e) => {
    const inputName = e.currentTarget.name;
    const inputValue = e.currentTarget.value;

    setFormData({ ...formData, [inputName]: inputValue });
  };

  const linksList = [
    {
      name: "Login",
      to: "#",
      isActive: true,
      id: "1",
    },
    {
      name: "Contact us",
      to: "#",
      isActive: false,
      id: "2",
    },
    {
      name: "About us",
      to: "#",
      isActive: false,
      id: "3",
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
              By logging in, you agress to our{" "}
              <Link isLight={true}>Terms of Use</Link> and{" "}
              <Link isLight={true}> Privacy Policy.</Link>
            </StyledTagline>
          </StyledLeftLayout>
          <StyledRightLayout>
            <Button varient="google" />
            <Seperator />
            <TextField
              label="Email"
              type="email"
              errorMsg={errors.email}
              errorState={true}
              isRequired={true}
              value={formData.email}
              name="email"
              onChange={handleInputchange}
            />
            <TextField
              label="Password"
              errorMsg={errors.password}
              type="password"
              errorState={true}
              isRequired={true}
              value={formData.password}
              onChange={handleInputchange}
              name="password"
            />
            <ForgotSection>
              <Link text="Forgot Password ?" />
            </ForgotSection>
            <Button text="Login" />
          </StyledRightLayout>
        </LoginCard>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Login;
