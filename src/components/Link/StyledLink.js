import styled from "@emotion/styled";

const StyledLink = styled.a`
  color: ${({ theme: { colors } }) => colors.textPrimary};
  text-decoration: none;
  text-underline-offset: 6px;

  ${({
    theme: {
      typo: { label },
    },
  }) =>
    `font-size: ${label.smallPlus.fontSize}; font-weight: ${label.smallPlus.fontWeight}`};

  &:hover {
    text-decoration: underline;
    color: ${({ theme: { colors } }) => colors.complimentary};
  }
`;

export default StyledLink;
