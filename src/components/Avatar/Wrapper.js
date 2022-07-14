import styled from "@emotion/styled";

const Styles = styled.div`
  .drop-down {
    position: absolute;
    right: 0px;
    top: 50px;
  }

  .drop-down ul {
    list-style-type: none;
    margin: none;
    width: 100px;
    border: 1px solid grey;
    padding: 10px;
  }

  .drop-down .item {
    border: none;
    background: none;
    cursor: pointer;

    ${({
      theme: {
        typo: { label },
        colors,
      },
    }) =>
      ` font-size: ${label.small.fontSize}; 
        font-weight: ${label.small.fontWeight};
        color: ${colors.textPrimary};
        :hover {
          color: ${colors.complimentary};
          text-decoration: underline;
        }
      `};
  }
`;

const StyledWrapper = styled.div`
  position: relative;
  background: none;
  border: none;
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

export { StyledContentWrapper, StyledWrapper, Styles };
