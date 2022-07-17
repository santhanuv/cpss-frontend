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
    align-items: center;
    height: 450px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
      rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
      rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
    border-radius: 10px;
  }

  .form-box {
    border-radius: 10px;
    width: 500px;
    height: 100%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  aside {
    border-radius: 10px 0 0 10px;
    padding: 30px;
    text-align: center;
    width: 100%;
    height: 100%;
    max-width: 300px;
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

  .btn-box {
    display: flex;
  }

  .btn-box button {
    display: block;
    border: none;
    background: none;
    border-radius: 4px;
    padding: 8px 16px;
    cursor: pointer;
    ${({
      theme: {
        typo: {
          label: { regularPlus },
        },
      },
    }) => `
        font-size: ${regularPlus.fontSize};
        font-weight: ${regularPlus.fontWeight};
    `}

    &:hover {
      ${({ theme: { colors } }) => `
        background-color: ${colors.complimentHover}; 
        color: ${colors.background};
        `}
    }
  }

  .btn-box .next {
    margin-left: auto;
  }

  .btn-box .register {
    margin-left: auto;
    ${({
      theme: {
        colors,
        typo: {
          label: { largePlus },
        },
      },
    }) => `
        background-color: ${colors.complimentary};
        color: ${colors.background};
    `}
  }

  .btn-box .back {
    margin-right: auto;
  }

  /* .btn-box .next {
    background-color: #b7b8bb;
    color: white;
    :hover {
      background-color: #b7b8bb;
    }
  } */
`;

export default StyledRegister;
