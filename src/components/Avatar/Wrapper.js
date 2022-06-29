import styled from "@emotion/styled";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

const StyledContentWrapper = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  font-size: 20px;
  font-weight: 500;

  ${({ theme: { colors } }) =>
    `color: ${colors.background}; background-color: ${colors.primary};`};
`;

export { StyledContentWrapper, StyledWrapper };
