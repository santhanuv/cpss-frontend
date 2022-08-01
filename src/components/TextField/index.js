import { useState } from "react";
import Wrapper from "./Wrapper";
import { MdError } from "react-icons/md";
import { BiShow, BiHide } from "react-icons/bi";

const TextField = ({
  label = "Label",
  errorMsg = "",
  errorState = true,
  type = "text",
  isRequired = false,
  value,
  onChange,
  placeholder = "",
  name,
  id = null,
  readOnly = false,
  children,
  domain = "",
  showDomain = true,
  ...props
}) => {
  const inputID = id ? id : name;

  const [showPassword, setShowPassword] = useState(false);
  let inputType = "text";
  if (type === "email") inputType = "text";
  else if (type === "password") {
    inputType = showPassword ? "text" : "password";
  }

  const handlePasswordShow = (e) => {
    e.preventDefault();
    setShowPassword((prev) => !prev);
  };

  return (
    <Wrapper type={type} showDomain={showDomain}>
      <label className="label">{label}</label>
      <div className="input-box">
        <input
          type={inputType}
          required={isRequired}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          name={name}
          id={inputID}
          readOnly={readOnly}
          {...props}
        />
        {type === "email" && showDomain ? (
          <span className="domain">{domain}</span>
        ) : null}
        {type === "password" ? (
          <button className="password-btn" onClick={handlePasswordShow}>
            {showPassword ? (
              <BiShow className="icon" />
            ) : (
              <BiHide className="icon" />
            )}
          </button>
        ) : null}
      </div>
      {errorMsg && (
        <p className="error">
          <span className="icon">
            <MdError />
          </span>
          {errorMsg}
        </p>
      )}
    </Wrapper>
  );
};

export default TextField;
