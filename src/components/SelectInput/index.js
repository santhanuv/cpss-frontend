import React from "react";
import StyledSelectInput from "./SelectInput.Styled";
import { MdError } from "react-icons/md";

const SelectInput = ({
  name,
  id,
  value,
  onChange,
  options,
  label,
  errMsg = "",
}) => {
  return (
    <StyledSelectInput>
      <label>{label}</label>
      <select name={name} id={id} value={value} onChange={onChange}>
        <option value="">{label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name ? option.name : option.value}
          </option>
        ))}
      </select>
      {errMsg && (
        <p className="error-msg">
          <span className="error-icon">
            <MdError />
          </span>
          {errMsg}
        </p>
      )}
    </StyledSelectInput>
  );
};

export default SelectInput;
