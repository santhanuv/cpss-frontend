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
  text = "",
  varient,
  icon,
  isActive = true,
  children,
  ...extraProps
}) => {
  return varient !== "google" ? (
    <StyledButton
      {...extraProps}
      width={width}
      onClick={onClick}
      isActive={isActive}
      disabled={!isActive}
    >
      {icon && <span>{icon}</span>}
      <span>{text}</span>
      {children}
    </StyledButton>
  ) : (
    <StyledGoogleButton {...extraProps} width={width} onClick={onClick}>
      <StyledGoogleIcon />
      <StyledGoogleText>Login with Google</StyledGoogleText>
    </StyledGoogleButton>
  );
};

export default Button;
