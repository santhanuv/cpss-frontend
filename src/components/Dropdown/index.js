import StyledDropdown from "./Dropdown.Styled";
import { MdOutlineKeyboardArrowDown, MdError } from "react-icons/md";
import { useState } from "react";

const Dropdown = ({
  name,
  value,
  label,
  options = [],
  onChange = () => {},
  errMsg = "",
}) => {
  const valueIndex = options.findIndex((option) => option.value === value);
  const selectedOption = options[valueIndex];
  const [open, setOpen] = useState(false);

  const handleOpen = (e) => {
    setOpen((open) => !open);
  };

  const handleOptionClick = (e) => {
    const id = e.currentTarget.id;
    const value = options[id].value;
    setOpen(false);
    onChange(e, { name, value });
  };

  return (
    <StyledDropdown>
      <div className="value-box" onClick={handleOpen} id="menu" tabIndex="0">
        <span className="text">
          {selectedOption?.name ? selectedOption.name : label}
        </span>
        <span className="icon">
          <MdOutlineKeyboardArrowDown />
        </span>
      </div>
      {open && (
        <div className="options">
          {options.map((option, index) => (
            <div
              key={index}
              id={index}
              className="option"
              onClick={handleOptionClick}
            >
              {option.name}
            </div>
          ))}
        </div>
      )}
      {errMsg && (
        <p className="error-msg">
          <span className="error-icon">
            <MdError />
          </span>
          {errMsg}
        </p>
      )}
    </StyledDropdown>
  );
};

export default Dropdown;
