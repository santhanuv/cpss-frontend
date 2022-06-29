import styled from "@emotion/styled";

const StyledWrapper = styled.div`
  width: 350px;
  flex-grow: 0;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 50px;
  position: fixed;
  height: 100vh;
  border-right: 1px solid
    ${({
      theme: {
        colors: { lightGrey },
      },
    }) => lightGrey};
  padding: 30px;
`;

const StyledLinksWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const StyledLinkWrapper = styled.div`
  padding: 8px 48px 8px 16px;
  width: 100%;
  border-radius: 4px;

  ${({ theme: { colors }, isActive }) =>
    isActive && `background-color: ${colors.complimentary}`};

  &:hover {
    a h3,
    span {
      ${({ isActive, theme: { colors } }) =>
        !isActive && `color: ${colors.complimentary}`}
    }
  }
`;

const StyledUserWrapper = styled.div``;

export {
  StyledWrapper,
  StyledLinksWrapper,
  StyledUserWrapper,
  StyledLinkWrapper,
};
