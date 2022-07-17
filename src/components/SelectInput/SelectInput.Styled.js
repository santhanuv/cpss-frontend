import styled from "@emotion/styled";

const StyledSelectInput = styled.div`
  width: 100%;
  margin-bottom: 16px;

  label {
    display: block;
    margin-bottom: 12px;

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
  }

  select {
    width: 100%;
    display: block;
    border-radius: 4px;
    border: none;
    background: none;
    height: 40px;
    padding: 8px 16px;
    ${({
      theme: {
        typo: {
          label: { regular },
        },
        colors,
      },
    }) => `
    font-size: ${regular.fontSize};
    font-weight: ${regular.fontWeight};
    border: 1px solid ${colors.textPrimary}
  `}
  }
`;

export default StyledSelectInput;
