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
      color: ${colors.textPrimary};
        :hover {
            color: ${colors.error}
        }
    }

    #approve-btn {
      color: ${colors.textPrimary};
        :hover {
            color: ${colors.complimentary}
        }
    }
  `}

  .icon-btn .icon {
    font-size: 25px;
  }

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
      ` font-size: 18px; 
        font-weight: 500;
        color: ${colors.error};
      `};
  }

  .done-msg {
    display: flex;
    align-items: center;
    padding: 20px 0px;
    font-size: 22px;
    color: ${({ theme: { colors } }) => colors.complimentary};
  }

  .done-msg .icon {
    font-size: 30px;
  }
`;

export default StyledNewAdvisors;
