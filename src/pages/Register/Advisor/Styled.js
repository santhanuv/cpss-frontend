import styled from "@emotion/styled";

const Styled = styled.div`
  height: 100vh;
  padding: 60px;
  display: flex;
  justify-content: center;

  .register-card {
    margin-top: 100px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
      rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
      rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
    border-radius: 10px;
    width: fit-content;
    height: fit-content;
    display: flex;
    justify-content: center;
  }

  .left-box {
    display: flex;
    flex-direction: column;
    border-radius: 10px 0 0 10px;
    padding: 30px;
    text-align: center;
    width: 100%;
    max-width: 400px;
    ${({
      theme: {
        typo: {
          title: { largePlus },
        },
        colors,
      },
    }) =>
      `
      h1 {
        margin-bottom: 36px;
        font-size: ${largePlus.fontSize};
        font-weight: ${largePlus.fontWeight};
      }
      background-color: ${colors.primary};
      color: ${colors.background};
      `}
  }

  form {
    width: 400px;
    padding: 30px;
  }

  .action-btns {
    display: flex;
    justify-content: flex-end;
    margin-top: 25px;
  }

  .action-btns button {
    margin-bottom: 0;
  }

  p {
    margin-bottom: 12px;
    ${({
      theme: {
        typo: { para },
      },
    }) =>
      `font-size: ${para.regular.fontSize};
      font-weight: ${para.regular.fontWeight};
      line-height: ${para.regular.lineHeight}`}
  }
`;

export default Styled;
