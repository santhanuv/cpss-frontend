import { StyledContentWrapper, StyledWrapper } from "./Wrapper";
import StyledIcon from "./StyledIcon";

const Avatar = ({ name = "Santhanu" }) => {
  return (
    <StyledWrapper>
      <StyledContentWrapper>{name.charAt(0)}</StyledContentWrapper>
      <StyledIcon />
    </StyledWrapper>
  );
};

export default Avatar;
