import styled from "@emotion/styled";

const StyledLeftLayout = styled.div`
  background-color: ${({ theme: { colors } }) => colors.primary};
  border-radius: 10px 0 0 10px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1023px) {
    border-radius: 10px 10px 0 0;
  }
`;
const StyledRightLayout = styled.div`
  padding: 30px;
  border-radius: 0 10px 10px 0px;
  max-width: 480px;
  flex-grow: 1;
  flex-shrink: 0;

  @media (max-width: 1023px) {
    flex-grow: 0;
  }
`;

export { StyledLeftLayout, StyledRightLayout };
