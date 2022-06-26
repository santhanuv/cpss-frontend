import styled from "@emotion/styled";
import StyledLink from "./StyledLink";

const StyledLightLink = styled(StyledLink)`
  color: ${({ theme: { colors } }) => colors.background};
  text-decoration: underline;

  &:hover {
    color: ${({ theme: { colors } }) => colors.lightGrey};
  }
`;

export default StyledLightLink;
