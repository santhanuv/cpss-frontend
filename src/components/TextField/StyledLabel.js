import styled from "@emotion/styled";

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 12px;
  ${({
    theme: {
      typo: { label },
    },
  }) => `
    font-size: ${label.regularPlus.fontSize};
    font-weight: ${label.regularPlus.fontWeight};
  `}
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export default StyledLabel;
