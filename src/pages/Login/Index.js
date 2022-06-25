import React, { useState } from "react";
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import Link from "../../components/Link";
import { StyledTagline, StyledHeading } from "./StyledText";
import Navbar from "../../components/Navbar";
import StyledImg from "./StyledImage";
import Card from "../../components/Card";
import { StyledLeftLayout, StyledRightLayout } from "./StyledLayout";
import { Wrapper, ContentWrapper } from "./Wrapper";
import { ForgotSection } from "./Section";
import { default as graduation } from "../../assets/images/graduation.svg";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

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
        <StyledLeftLayout>
          <StyledTagline>
            Welcome to Saintgits Placement Support System
          </StyledTagline>
          <StyledImg src={graduation} alt="graduation-image" />
        </StyledLeftLayout>
        <StyledRightLayout>
          <Card>
            <StyledHeading>Login</StyledHeading>
            <TextField
              label="Email"
              type="email"
              errorMsg="Invalid Email Address"
              errorState={true}
              isRequired={true}
              value={formData.email}
              name="email"
              onChange={handleInputchange}
            />
            <TextField
              label="Password"
              errorMsg="Invalid Password"
              type="password"
              errorState={true}
              isRequired={true}
              value={formData.password}
              onChange={handleInputchange}
              name="password"
            />
            <ForgotSection style={{ marginBottom: "50px", display: "flex" }}>
              <Link text="Forgot Password ?" />
            </ForgotSection>
            <Button />
          </Card>
        </StyledRightLayout>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Login;
