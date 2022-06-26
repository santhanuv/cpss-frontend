import styled from "@emotion/styled";

const StyledErrorIcon = styled.span`
  font-size: 24px;
  display: flex;
`;

const StyledErrorText = styled.p`
  color: ${({ theme }) => theme.colors.error};
  margin: 12px 0px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export { StyledErrorIcon, StyledErrorText };
