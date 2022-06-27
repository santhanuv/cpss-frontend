import styled from "@emotion/styled";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseFill } from "react-icons/ri";

const StyledNavButton = styled.button`
  border: none;
  display: none;
  cursor: pointer;
  ${({ theme: { colors }, isOpen }) =>
    !isOpen
      ? `background-color: ${colors.background}; color: ${colors.primary}`
      : `background-color: ${colors.primary}; color: ${colors.background}`};

  @media (max-width: 789px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const StyledOpenIcon = styled(GiHamburgerMenu)`
  width: 30px;
  height: 30px;
`;

const StyledCloseIcon = styled(RiCloseFill)`
  width: 30px;
  height: 30px;
`;

export { StyledNavButton, StyledOpenIcon, StyledCloseIcon };
