import styled from "@emotion/styled";

const Styles = styled.div`
  .selector {
    display: flex;
    gap: 100px;
    width: 100%;
  }

  .selector #active {
    ${({ theme: { colors } }) => `color: ${colors.complimentary}`};
    text-decoration: underline;
    font-weight: 500;
    text-underline-offset: 4px;
  }

  .selector button {
    cursor: pointer;
    border: none;
    background: none;
    text-underline-offset: 4px;
    ${({
      theme: {
        typo: { label },
        colors,
      },
    }) =>
      `font-size: ${label.regular.fontSize}; 
      font-weight: ${label.regular.fontWeight};
      color: ${colors.textPrimary};
      :hover {
        color: ${colors.complimentary};
        text-decoration: underline;
    }
      `};
    text-decoration: none;
  }

  .content {
    margin-top: 50px;
  }

  .content h1 {
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

  .edit-icon {
    background: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    ${({
      theme: {
        typo: { label },
      },
    }) =>
      ` font-size: ${label.regularPlus.fontSize}; 
        font-weight: ${label.regularPlus.fontWeight};
      `};

    :hover {
      ${({ theme: { colors } }) => `color: ${colors.complimentary}`}
    }
  }

  .edit-icon .icon {
    font-size: 20px;
  }
`;

export default Styles;
