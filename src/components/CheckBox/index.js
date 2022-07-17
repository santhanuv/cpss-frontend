import StyledCheckBox from "./CheckBox.Styled";

const CheckBox = ({ name, value, checked, id, onChange, label }) => {
  return (
    <StyledCheckBox>
      <label>{label}</label>
      <input
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        id={id}
        onChange={onChange}
      />
    </StyledCheckBox>
  );
};

export default CheckBox;
