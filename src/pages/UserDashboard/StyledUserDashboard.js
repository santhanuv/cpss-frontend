import styled from "@emotion/styled";

const StyledTopSection = styled.div`
  h1 {
    ${({
      theme: {
        typo: {
          title: { largePlus },
        },
        colors,
      },
    }) => `
    font-size: ${largePlus.fontSize};
    font-weight: ${largePlus.fontWeight};
    color: ${colors.textPrimary}
    `}
  }

  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;

export { StyledTopSection };
