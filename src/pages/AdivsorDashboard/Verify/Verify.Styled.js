import styled from "@emotion/styled";

const StyledVerify = styled.div`
  h2 {
    margin-bottom: 25px;
    ${({
      theme: {
        typo: { title },
      },
    }) =>
      ` font-size: ${title.smallPlus.fontSize}; 
        font-weight: ${title.smallPlus.fontWeight};
      `};
  }
  .icon {
    font-size: 20px;
  }

  .verify-icon {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border: none;
    background: none;
    ${({
      theme: {
        typo: { label },
        colors,
      },
    }) =>
      ` font-size: ${label.smallPlus.fontSize}; 
        font-weight: ${label.smallPlus.fontWeight};
        :hover {
            color: ${colors.complimentary}
        }
      `};
  }
`;

export default StyledVerify;
