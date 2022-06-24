import React, { useState } from "react";
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import Link from "../../components/Link";
import StyledTagline from "./StyledTagline";
import Navbar from "../../components/Navbar";

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
      name: "Contact US",
      to: "#",
      isActive: false,
      id: "2",
    },
    {
      name: "About US",
      to: "#",
      isActive: false,
      id: "3",
    },
  ];

  return (
    <>
      <Navbar links={linksList} />
      <div style={{ width: "500px" }}>
        <StyledTagline>
          Welcome to Saintgits Placement Support System
        </StyledTagline>
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
        <Link text="Forgot Password" />
        <Button />
      </div>
    </>
  );
};

export default Login;
