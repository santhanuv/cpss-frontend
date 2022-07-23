import styled from "@emotion/styled";

const StyledRegister = styled.div`
  .content {
    padding: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card {
    display: flex;
    width: fit-content;
    justify-content: center;
    /* align-items: center; */
    height: fit-content;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
      rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
      rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
    border-radius: 10px;
  }

  .form-box {
    border-radius: 10px;
    width: 500px;
    height: 100%;
    padding: 40px 30px 25px 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .left-box {
    display: flex;
    flex-direction: column;
    border-radius: 10px 0 0 10px;
    padding: 30px;
    text-align: center;
    width: 100%;
    max-width: 475px;
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
      color: ${colors.background}
      `}
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

  .register {
    display: block;
    width: 150px;
    margin-top: 25px;
    margin-left: auto;
  }
`;

export default StyledRegister;
