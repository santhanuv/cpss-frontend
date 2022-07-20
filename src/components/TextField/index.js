import StyledTextInput from "./StyledTextInput";
import StyledLabel from "./StyledLabel";
import Wrapper from "./Wrapper";
import { StyledErrorText, StyledErrorIcon } from "./StyledError";
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
}) => {
  const inputID = id ? id : name;

  return (
    <Wrapper>
      <StyledLabel htmlFor={inputID}>{label}</StyledLabel>
      <StyledTextInput
        type={type}
        isRequired={isRequired}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        id={inputID}
        readOnly={readOnly}
      />
      {errorMsg && (
        <StyledErrorText>
          <StyledErrorIcon>
            <MdError />
          </StyledErrorIcon>
          {errorMsg}
        </StyledErrorText>
      )}
    </Wrapper>
  );
};

export default TextField;
