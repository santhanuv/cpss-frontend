import Wrapper from "./Wrapper";
import { MdError } from "react-icons/md";

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

  return (
    <Wrapper type={type} showDomain={showDomain}>
      <label className="label">{label}</label>
      <div className="input-box">
        <input
          type={type === "email" ? "text" : type}
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
