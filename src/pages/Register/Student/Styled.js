import styled from "@emotion/styled";

const Styled = styled.div`
  height: 100vh;

  padding: 60px;

  h1 {
    margin-bottom: 30px;
    text-align: center;
    ${({
      theme: {
        typo: { title },
        colors,
      },
    }) => `
      color: ${colors.textPrimary};
      font-size: ${title.regularPlus.fontSize};
      font-weight: ${title.regularPlus.fontWeight};
    `}
  }

  h2 {
    margin-bottom: 30px;
    ${({
      theme: {
        typo: { title },
        colors,
      },
    }) => `
      color: ${colors.textPrimary};
      font-size: ${title.smallPlus.fontSize};
      font-weight: ${title.smallPlus.fontWeight};
    `}
  }

  .register-card {
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
  }

  form {
    width: 800px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
      rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
      rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
    border-radius: 10px;
    padding: 30px;
  }

  .semester .set {
    display: flex;
    gap: 30px;
    justify-content: space-between;
    input {
      min-width: 0px;
    }
  }

  .action-btns {
    display: flex;
    margin-top: 50px;
  }

  #back-btn {
    margin-right: auto;
  }

  #next-btn {
    margin-left: auto;
  }

  #submit-btn {
    margin-left: auto;

    ${({ theme: { colors } }) => `
      background-color: ${colors.complimentary};
      color: ${colors.background};
      :hover {
        color: ${colors.background};
        background-color: ${colors.complimentHover}
      }
    `}
  }

  .action-btns button {
    display: block;
    border: none;
    background: none;
    padding: 8px 16px;
    cursor: pointer;
    border-radius: 4px;

    ${({
      theme: {
        colors,
        typo: { label },
      },
    }) => `
      font-size: ${label.regularPlus.fontSize};
      font-weight: ${label.regularPlus.fontWeight};
      color: ${colors.textPrimary};

      :hover {
        color: ${colors.background};
        background-color: ${colors.complimentHover}
      }
    `}
  }
`;

export default Styled;
