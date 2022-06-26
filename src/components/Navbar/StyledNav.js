import styled from "@emotion/styled";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 50px;
`;

const StyledNavList = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 30px;
`;

const StyledListItem = styled.li``;

const StyledActive = styled.span`
  color: ${({ theme: { colors } }) => colors.complimentary};
  text-decoration: underline;
  text-underline-offset: 6px;
  ${({
    theme: {
      typo: { label },
    },
  }) =>
    `font-size: ${label.smallPlus.fontSize}; font-weight: ${label.smallPlus.fontWeight}`};
`;

export { StyledNav, StyledNavList, StyledListItem, StyledActive };
