import StyledLink from "./StyledLink";
import StyledLightLink from "./StyledLightLink";

const Link = ({ text = "", to = "#", children, isLight }) => {
  return isLight ? (
    <StyledLightLink to={to}>{text || children}</StyledLightLink>
  ) : (
    <StyledLink to={to}>{text || children}</StyledLink>
  );
};

export default Link;
