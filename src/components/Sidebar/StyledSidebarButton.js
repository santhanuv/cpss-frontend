import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const StyledSidebarLink = styled(Link)`
  display: flex;
  gap: 15px;
  justify-content: flex-start;
  align-items: flex-end;
  text-decoration: none;
  width: 100%;
`;
const StyledText = styled.h3`
  display: flex;
  align-items: center;

  ${({ theme: { colors }, isActive }) =>
    isActive
      ? `color: ${colors.background}; background-color: ${colors.complimentary}`
      : `color: ${colors.textPrimary};`};

  font-size: ${({
    theme: {
      typo: {
        label: { large },
      },
    },
  }) => large.fontSize};
  font-weight: normal;
`;
const StyledIcon = styled.span`
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
  color: ${({ theme: { colors }, isActive }) =>
    isActive ? colors.background : colors.textPrimary};
`;

export { StyledSidebarLink, StyledText, StyledIcon };
