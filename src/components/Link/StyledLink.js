import styled from "@emotion/styled";

const StyledLink = styled.a`
  color: ${({ theme: { colors } }) => colors.textPrimary};
  text-decoration: none;
  text-underline-offset: 8px;

  ${({
    theme: {
      typo: { label },
    },
  }) =>
    `font-size: ${label.mini.fontSize}; font-weight: ${label.mini.fontWeight}`};

  &:hover {
    text-decoration: underline;
    color: ${({ theme: { colors } }) => colors.complimentary};
  }
`;

export default StyledLink;
