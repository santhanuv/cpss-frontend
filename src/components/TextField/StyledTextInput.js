import styled from "@emotion/styled";

const StyledTextInput = styled.input`
  width: 100%;
  margin-bottom: 16px;
  border: ${({ theme }) => `1px solid ${theme.colors.textPrimary}`};
  border-radius: 4px;
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.colors.background};
  :focus {
    outline: ${({ theme }) => `1.5px solid ${theme.colors.complimentHover}`};
    border: ${({ theme }) => `1.5px solid ${theme.colors.complimentHover}`};
  }

  // font themes
  font-family: "Inter", sans-serif;
  ${({
    theme: {
      typo: {
        para: { mini },
      },
    },
  }) => `
    font-size: ${mini.fontSize};
    line-height: ${mini.lineHeight};
    font-weight: ${mini.fontWeight};
  `}
`;

export default StyledTextInput;
