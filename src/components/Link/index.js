import StyledLink from "./StyledLink";
import StyledLightLink from "./StyledLightLink";

const Link = ({ text = "", to = "#", children, isLight }) => {
  return isLight ? (
    <StyledLightLink href={to}>{text || children}</StyledLightLink>
  ) : (
    <StyledLink href={to}>{text || children}</StyledLink>
  );
};

export default Link;
