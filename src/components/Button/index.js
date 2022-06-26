import StyledButton from "./StyledButton";
import {
  StyledGoogleButton,
  StyledGoogleIcon,
  StyledGoogleText,
} from "./GoogleButton";

import React from "react";

const Button = ({
  width = "100%",
  onClick,
  text = "Button",
  varient,
  icon,
}) => {
  return varient !== "google" ? (
    <StyledButton width={width} onClick={onClick}>
      {icon && <span>{icon}</span>}
      <span>{text}</span>
    </StyledButton>
  ) : (
    <StyledGoogleButton width={width} onClick={onClick}>
      <StyledGoogleIcon />
      <StyledGoogleText>Login with Google</StyledGoogleText>
    </StyledGoogleButton>
  );
};

export default Button;
