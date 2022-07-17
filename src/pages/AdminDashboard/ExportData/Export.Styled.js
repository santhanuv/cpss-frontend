import styled from "@emotion/styled";

const StyledExport = styled.div`
  .filter-box {
    display: flex;
    flex-direction: column;
    width: 75%;
    height: 90%;
    border: 1px solid grey;
    border-radius: 10px;
    position: absolute;
    top: 50px;
    background-color: ${({ theme: { colors } }) => colors.background};
    padding: 30px;
  }

  h3 {
    margin-bottom: 25px;
  }

  h4 {
    margin-bottom: 15px;
  }

  .column-box {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin-bottom: 25px;
  }

  form {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .apply-btn-box {
    width: 10%;
    margin-top: auto;
  }

  .primary-btns-box {
    padding-right: 10%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
  }

  .primary-btn {
    width: 150px;
  }

  .textfield-box {
    width: 25%;

    input {
      min-width: 0px;
      width: 25%;
    }
  }

  ${({
    theme: {
      typo: { label },
    },
  }) => `
        h3 {
            font-size: ${label.largePlus.fontSize};
            font-weight: ${label.largePlus.fontWeight};
        }
        
        h4 {
            font-size: ${label.regularPlus.fontSize};
            font-weight: ${label.regularPlus.fontWeight};
        }
    `}
`;

export default StyledExport;
