import styled from "@emotion/styled";

const StyledDropdown = styled.div`
  max-width: 100%;
  width: 100%;
  margin-bottom: 16px;
  position: relative;
  cursor: pointer;

  .value-box {
    display: flex;
    align-items: center;
    position: relative;
    border-radius: 4px;
    margin-bottom: 8px;
    padding: 10px;
    overflow: hidden;
    width: 100%;
    /* padding: 8px 16px; */
    ${({
      theme: {
        typo: { label },
        colors,
      },
    }) => `
        font-size: ${label.regular.fontSize};
        border: 1px solid ${colors.textPrimary};
    `}
  }

  .value-box .text {
    width: 95%;
    overflow: hidden;
  }

  .value-box .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    position: absolute;
    right: 12px;
  }

  .options {
    z-index: 5;
    display: flex;
    flex-direction: column;
    gap: 3px;
    font-size: 16px;
    position: absolute;
    background-color: ${({ theme: { colors } }) => colors.background};
    width: 100%;
    left: 0;
    top: calc(100% + 5px);
    padding: 12px 0;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
      rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
      rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
    border-radius: 4px;
    border: 1px solid lightGrey;
  }

  .options .option {
    padding: 10px 16px;
    cursor: pointer;
    overflow: hidden;
    :hover {
      ${({ theme: { colors } }) =>
        `
        background-color: ${colors.primary};
        color: ${colors.background};
      `};
    }
  }

  .error-msg {
    color: ${({ theme }) => theme.colors.error};
    margin: 12px 0px;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .error-icon {
    font-size: 24px;
    display: flex;
  }
`;

export default StyledDropdown;
