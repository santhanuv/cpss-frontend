import styled from "@emotion/styled";

const StyledCheckBox = styled.div`
  label {
    display: block;
    ${({
      theme: {
        typo: {
          label: { regular },
        },
      },
    }) => `font-size: ${regular}`}
  }

  input {
    display: block;
    border: 1px solid black;
    width: 18px;
    height: 18px;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export default StyledCheckBox;
