import styled from "@emotion/styled";

const styleActiveItem = (isActive, color) => {
  return isActive && `color: ${color}`;
};

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 30px 120px;
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
  text-underline-offset: 8px;
  ${({
    theme: {
      typo: { label },
    },
  }) =>
    `font-size: ${label.miniPlus.fontSize}; font-weight: ${label.miniPlus.fontWeight}`};
`;

export { StyledNav, StyledNavList, StyledListItem, StyledActive };
