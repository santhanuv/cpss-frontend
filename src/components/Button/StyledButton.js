import styled from "@emotion/styled";
import setFont from "../../utility/setFont";

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  padding: 8px 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;

  width: ${({ width }) => width};

  ${({ theme: { colors }, isActive }) =>
    isActive
      ? `
    background-color: ${colors.complimentary};
    color: ${colors.background};
    &:hover {
        background-color: ${colors.complimentHover};
        cursor: pointer;
    }
    &:focus {
        border: none;
        outline: 1px solid ${colors.complimentHover};
    }
    `
      : `
    background-color: ${colors.btnGrey};
      color: ${colors.background};
    `};

  ${({
    theme: {
      typo: {
        label: { largePlus },
      },
    },
  }) => setFont(largePlus.fontSize, largePlus.fontWeight)};
`;

export default StyledButton;
