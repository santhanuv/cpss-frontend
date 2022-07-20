import styled from "@emotion/styled";

const Styled = styled.div`
  height: fit-content;

  padding: 60px;

  .progress-container {
    width: 100%;
    margin-bottom: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }

  .progress-container .step {
    z-index: 5;
    background-color: lightgrey;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .step-2::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 4px;
    background-color: red;
  }

  .progress {
    position: absolute;
    height: 4px;
    width: 100%;
    z-index: -1;
    background-color: lightgray;
  }

  h1 {
    margin-bottom: 60px;
    text-align: center;
    ${({
      theme: {
        typo: { title },
        colors,
      },
    }) => `
      color: ${colors.textPrimary};
      font-size: ${title.largePlus.fontSize};
      font-weight: ${title.largePlus.fontWeight};
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

  display: flex;
  flex-direction: column;
  align-items: center;

  .register-card {
    width: 800px;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  form {
    width: 80%;
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
