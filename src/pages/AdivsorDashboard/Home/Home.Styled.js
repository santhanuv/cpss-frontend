import styled from "@emotion/styled";

const StyledHome = styled.div`
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

  .selector {
    display: flex;
    gap: 25px;
    margin-bottom: 25px;
  }

  .selector button {
    cursor: pointer;
    border: 1px solid grey;
    padding: 8px 16px;
    border-radius: 4px;
    transition: background, color 150ms ease-in-out;
    ${({
      theme: {
        colors,
        typo: {
          label: { regular },
        },
      },
    }) => `
      color: ${colors.textPrimary};
      border: 1px solid ${colors.grey};
      background-color: ${colors.background};
      font-size: ${regular.fontSize};
    `};
  }

  .selector .approved {
    :hover {
      ${({
        theme: {
          colors,
          typo: {
            label: { regularPlus },
          },
        },
      }) => `
      color: ${colors.background};
      background-color: ${colors.complimentary};
      font-weight: ${regularPlus.fontWeight};
    `};
    }
  }

  .selector .updated {
    :hover {
      ${({
        theme: {
          colors,
          typo: {
            label: { regularPlus },
          },
        },
      }) => `
      color: ${colors.background};
      background-color: #ae8d0e;
      font-weight: ${regularPlus.fontWeight};
    `};
    }
  }

  .selector .rejected {
    :hover {
      ${({
        theme: {
          colors,
          typo: {
            label: { regularPlus },
          },
        },
      }) => `
      color: ${colors.background};
      background-color: ${colors.error};
      font-weight: ${regularPlus.fontWeight};
    `};
    }
  }

  .icon {
    font-size: 20px;
  }

  .delete-icon {
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
        :hover {
            color: ${colors.error};
        }
      `};
  }

  .done-msg.approved,
  .done-msg.updated {
    display: flex;
    align-items: center;
    padding: 20px 0px;
    gap: 15px;
    font-size: 22px;
    color: ${({ theme: { colors } }) => colors.error};
  }

  .done-msg .icon {
    font-size: 30px;
  }

  .primary-btn .csv-btn {
    text-decoration: none;
  }
`;

export default StyledHome;
