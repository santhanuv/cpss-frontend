import styled from "@emotion/styled";

const StyledTagline = styled.h1`
  font-size: 48px;
  color: ${({ theme: { colors } }) => colors.complimentary};
  text-align: center;
`;

const StyledHeading = styled.h1`
  margin-bottom: 50px;
  text-align: center;
  color: ${({ theme: { colors } }) => colors.textPrimary};

  ${({
    theme: {
      typo: { title },
    },
  }) =>
    ` font-size: ${title.headlinePlus.fontSize}; 
      font-weight: ${title.headlinePlus.fontWeight}`}
`;

export { StyledTagline, StyledHeading };
