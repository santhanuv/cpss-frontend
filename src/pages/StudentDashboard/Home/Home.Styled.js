import styled from "@emotion/styled";

const Styles = styled.div`
  h1 {
    margin-bottom: 25px;
    ${({
      theme: {
        typo: { title },
      },
    }) =>
      ` font-size: ${title.smallPlus.fontSize}; 
        font-weight: ${title.smallPlus.fontWeight};
      `};
  }
`;

export default Styles;
