import styled from "@emotion/styled";

const Styled = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px;

  .register-card {
    width: 90%;
    height: fit-content;
    min-height: 560px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  .progress-bar-wrapper {
    margin-bottom: 80px;
    min-height: fit-content;
    width: 50%;
  }

  .content-box .left-box h1 {
    margin-bottom: 60px;
    text-align: center;
    ${({
      theme: {
        typo: { title },
        colors,
      },
    }) => `
      color: ${colors.background};
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

  .content-box {
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
      rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
      rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
    border-radius: 10px;
    display: flex;
    max-width: 800px;
  }

  .content-box .left-box {
    border-radius: 10px 0 0 10px;
    padding: 30px;
    width: 40%;
    background-color: ${({ theme: { colors } }) => colors.primary};
    flex-shrink: 0;
  }

  .content-box form {
    padding: 30px;
    flex-grow: 1;
  }

  .content-box form h3 {
    margin-bottom: 25px;
    ${({
      theme: {
        typo: { label },
        colors,
      },
    }) => `
      color: ${colors.textPrimary};
      font-size: ${label.regular.fontSize};
      font-weight: ${label.regular.fontWeight};
    `}
  }

  .semester .set {
    display: flex;
    gap: 20px;
    justify-content: space-between;
    input {
      min-width: 0px;
    }
  }

  .action-btns {
    display: flex;
    margin-top: 40px;
  }

  .control-btn {
    width: 150px;
    display: block;
    margin: 0;
  }

  .control-btn.left-btn {
    margin-right: auto;
  }

  .control-btn.right-btn {
    margin-left: auto;
  }

  /* 
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
        background-color: ${colors.complimentHover};
      }
    `}
  } */
`;

export default Styled;
