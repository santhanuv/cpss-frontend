import StyledCheckBox from "./CheckBox.Styled";

const CheckBox = ({ name, value = false, id, onChange, label }) => {
  return (
    <StyledCheckBox>
      <label>{label}</label>
      <input
        type="checkbox"
        name={name}
        checked={value}
        id={id}
        onChange={onChange}
      />
    </StyledCheckBox>
  );
};

export default CheckBox;
