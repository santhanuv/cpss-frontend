import StyledButton from "./StyledButton";

import React from "react";

const Button = ({ width = "100%", onClick, text = "Button" }) => {
  return (
    <StyledButton width={width} onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default Button;
