import styled from "@emotion/styled";

const StyledLeftLayout = styled.div`
  background-color: ${({ theme: { colors } }) => colors.primary};
  border-radius: 10px 0 0 10px;
  padding: 50px;
  width: 42%;
  ${/* For Desktop */ 1 && ""};
  min-width: 42%;
`;
const StyledRightLayout = styled.div`
  padding: 50px;
  border-radius: 0 10px 10px 0px;
  flex: 1;
`;

export { StyledLeftLayout, StyledRightLayout };
