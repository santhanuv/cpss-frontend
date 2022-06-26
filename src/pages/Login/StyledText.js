import styled from "@emotion/styled";
import setFont from "../../utility/setFont";

const StyledTagline = styled.p`
  ${({
    theme: {
      typo: {
        para: { regular },
      },
    },
  }) => setFont(regular.fontSize, regular.fontWeight, regular.lineHeight)};

  color: ${({ theme: { colors } }) => colors.lightGrey};
`;

const StyledHeading = styled.h1`
  margin-bottom: 16px;
  color: ${({ theme: { colors } }) => colors.background};

  ${({
    theme: {
      typo: {
        title: { largePlus },
      },
    },
  }) => setFont(largePlus.fontSize, largePlus.fontWeight)}
`;

const StyledFooter = styled.p``;

export { StyledTagline, StyledHeading };
