import StyledTextInput from "./StyledTextInput";
import StyledLabel from "./StyledLabel";
import { StyledErrorText, StyledErrorIcon } from "./StyledError";
import { MdError } from "react-icons/md";

const TextField = ({
  label = "Label",
  errorMsg = "No msg",
  errorState = true,
  type = "text",
  isRequired = false,
  value,
  onChange,
  name,
  id = null,
}) => {
  const inputID = id ? id : name;

  return (
    <div>
      <StyledLabel htmlFor={inputID}>{label}</StyledLabel>
      <StyledTextInput
        type={type}
        isRequired={isRequired}
        value={value}
        onChange={onChange}
        name={name}
        id={inputID}
      />
      {errorState && (
        <StyledErrorText>
          <StyledErrorIcon>
            <MdError />
          </StyledErrorIcon>
          {errorMsg}
        </StyledErrorText>
      )}
    </div>
  );
};

export default TextField;
