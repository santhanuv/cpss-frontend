import styled from "@emotion/styled";

const StyledAlertDialog = styled.div`
  position: fixed;
  z-index: 100;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: fit-content;
  min-width: 450px;
  height: fit-content;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  border-radius: 10px;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  ${({
    theme: {
      colors,
      typo: { title, para },
    },
  }) => `
    background-color: ${colors.background};
        
        h1 {
            font-size: ${title.regularPlus.fontSize};
            font-weight: ${title.regularPlus.fontWeight};
        }

        p {
            font-size: ${para.regular.fontSize};
            font-weight: ${para.regular.fontWeight};
            line-height: ${para.regular.lineHeight};
        }
  `};

  @keyframes scale-up {
    0% {
      transform: scale(1);
    }

    50% {
      transform: scale(1.2);
    }

    100% {
      transform: scale(1);
    }
  }

  h1 {
    margin-bottom: 24px;
  }

  .btn {
    margin-top: 25px;
    width: 250px;
  }

  .alert-icon {
    font-size: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 8px 0;
    animation: scale-up 500ms ease-in-out;
  }

  .alert-icon.success {
    color: ${({ theme: { colors } }) => colors.complimentary};
  }

  .alert-icon.error {
    color: ${({ theme: { colors } }) => colors.error};
  }
`;

export default StyledAlertDialog;
