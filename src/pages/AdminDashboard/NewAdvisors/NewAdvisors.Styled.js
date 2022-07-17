import styled from "@emotion/styled";

const StyledNewAdvisors = styled.div`
  h2 {
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

  .icon {
    font-size: 20px;
  }

  .action-btns {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  ${({ theme: { colors } }) => `
    #reject-btn {
        :hover {
            color: ${colors.error}
        }
    }

    #approve-btn {
        :hover {
            color: ${colors.complimentary}
        }
    }
  `}

  .icon-btn {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border: none;
    background: none;
    ${({
      theme: {
        typo: { label },
        colors,
      },
    }) =>
      ` font-size: ${label.smallPlus.fontSize}; 
        font-weight: ${label.smallPlus.fontWeight};
      `};
  }
`;

export default StyledNewAdvisors;
