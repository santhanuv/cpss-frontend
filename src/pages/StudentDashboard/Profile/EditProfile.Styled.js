import styled from "@emotion/styled";

const Styled = styled.div`
  position: fixed;
  overflow: scroll;
  top: 25px;
  right: 25%;
  left: 25%;
  width: 50%;
  height: 90%;
  background-color: ${({ theme: { colors } }) => colors.background};
  padding: 30px;
  justify-content: center;

  .head-section {
    display: flex;
    align-items: center;
    margin-bottom: 25px;
  }

  .close-btn {
    margin-left: auto;
    border: none;
    background: none;
    padding: 5px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;

    :hover {
      background-color: ${({ theme: { colors } }) => colors.lightGrey};
    }
  }

  .close-btn .icon {
    font-size: 30px;
  }

  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;

  border-radius: 10px;

  form {
    max-width: 400px;
  }

  .content {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .save-btn-box {
    margin: 50px 0;
  }

  h1 {
    font-size: ${({
      theme: {
        typo: { title },
      },
    }) => title.small.fontSize};
    font-weight: 700;
  }
`;

export default Styled;
