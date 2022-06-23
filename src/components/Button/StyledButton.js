import styled from "@emotion/styled";
import setFont from "../../utility/setFont";

const StyledButton = styled.button`
  border: none;
  padding: 8px 50px;

  width: ${({ width }) => width};

  ${({ theme: { colors } }) => `
    background-color: ${colors.primary};
    color: ${colors.background};
    &:hover {
        background-color: ${colors.complimentary};
    }
    &:focus {
        border: none;
        outline: 1px solid ${colors.complimentary};
    }
    `};

  ${({
    theme: {
      typo: { title },
    },
  }) => setFont(title.smallPlus.fontSize, title.smallPlus.fontWeight)};
`;

export default StyledButton;
