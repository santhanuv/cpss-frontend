import React from "react";
import StyledLink from "./StyledLink";

const Link = ({ text = "Link", to = "#" }) => {
  return <StyledLink href={to}>{text}</StyledLink>;
};

export default Link;
