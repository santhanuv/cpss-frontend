import styled from "@emotion/styled";

const StyledLink = styled.a`
  color: ${({ theme: { colors } }) => colors.textPrimary};
  margin-bottom: 10px;
  display: block;
  text-decoration: none;

  ${({
    theme: {
      typo: { label },
    },
  }) =>
    `font-size: ${label.mini.fontSize}; font-weight: ${label.mini.fontWeight}`};

  &:hover {
    text-decoration: underline;
    text-underline-offset: 8px;
    color: ${({ theme: { colors } }) => colors.complimentary};
  }
`;

export default StyledLink;
