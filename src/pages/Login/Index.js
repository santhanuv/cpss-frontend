import React, { useState } from "react";
import TextField from "../../components/TextField";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleInputchange = (e) => {
    const inputName = e.currentTarget.name;
    const inputValue = e.currentTarget.value;

    setFormData({ ...formData, [inputName]: inputValue });
  };

  return (
    <div style={{ width: "500px" }}>
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
    </div>
  );
};

export default Login;
