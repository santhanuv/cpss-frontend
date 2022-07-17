import React from "react";
import StyledSelectInput from "./SelectInput.Styled";

const SelectInput = ({ name, id, value, onChange, options, label }) => {
  return (
    <StyledSelectInput>
      <label>{label}</label>
      <select name={name} id={id} value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name ? option.name : option.value}
          </option>
        ))}
      </select>
    </StyledSelectInput>
  );
};

export default SelectInput;
