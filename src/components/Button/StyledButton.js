import styled from "@emotion/styled";
import setFont from "../../utility/setFont";

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  padding: 8px 36px;

  width: ${({ width }) => width};

  ${({ theme: { colors } }) => `
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