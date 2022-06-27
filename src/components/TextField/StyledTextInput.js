import styled from "@emotion/styled";

const StyledTextInput = styled.input`
  width: 100%;
  border: ${({ theme }) => `1px solid ${theme.colors.textPrimary}`};
  border-radius: 4px;
  padding: 8px 16px;
  min-width: 370px;
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
        para: { regular },
      },
    },
  }) => `
    font-size: ${regular.fontSize};
    line-height: ${regular.lineHeight};
    font-weight: ${regular.fontWeight};
  `}

  @media (max-width: 539px) {
    min-width: 0px;
    width: 100%;
  }
`;

export default StyledTextInput;
