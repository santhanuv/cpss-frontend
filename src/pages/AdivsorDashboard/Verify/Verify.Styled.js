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
    text-decoration: none;
    display: flex;
    justify-content: flex-start;
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
        color: ${colors.textPrimary};
        :hover {
            color: ${colors.complimentary}
        }
      `};
  }

  .done-msg {
    display: flex;
    align-items: center;
    padding: 20px 0px;
    font-size: 22px;
    color: ${({ theme: { colors } }) => colors.complimentary};
  }

  .done-msg .icon {
    font-size: 30px;
  }
`;

export default StyledVerify;
