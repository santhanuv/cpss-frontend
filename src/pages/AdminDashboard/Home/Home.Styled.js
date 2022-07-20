import styled from "@emotion/styled";

const StyledHome = styled.div`
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

  .delete-icon {
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
            color: ${colors.error}
        }
      `};
  }

  .done-msg {
    display: flex;
    gap: 25px;
    align-items: center;
    padding: 20px 0px;
    font-size: 22px;
    color: ${({ theme: { colors } }) => colors.error};
  }

  .done-msg .icon {
    font-size: 30px;
  }
`;

export default StyledHome;
