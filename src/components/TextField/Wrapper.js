import styled from "@emotion/styled";

const Wrapper = styled.div`
  margin-bottom: 16px;

  .label {
    display: block;
    margin-bottom: 12px;
    ${({
      theme: {
        typo: { label },
      },
    }) => `
    font-size: ${label.regularPlus.fontSize};
    font-weight: ${label.regularPlus.fontWeight};
  `}
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  .input-box {
    display: flex;
    align-items: center;
    width: 100%;
    border: ${({ theme }) => `1px solid ${theme.colors.textPrimary}`};
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.background};
    :focus-within {
      outline: ${({ theme }) => `1.5px solid ${theme.colors.complimentHover}`};
      border: ${({ theme }) => `1.5px solid ${theme.colors.complimentHover}`};
    }
  }

  .input-box input {
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
    border: none;
    outline: none;
    ${({ type, showDomain }) =>
      type === "email" && !showDomain ? "width: 100%;" : null}
    border: none;
    border-radius: 4px;
    padding: 8px 16px;

    ${({
      theme: {
        typo: {
          para: { regular },
        },
      },
    }) => `
    font-size: ${regular.fontSize};
    line-height: ${regular.lineHeight};
    font-weight: ${regular.fontWeight};
  `}

    @media (max-width: 539px) {
      min-width: 0px;
      width: 100%;
    }
  }

  .input-box .domain {
    margin-right: 16px;
    color: #4c4a4a;
  }

  .input-box .password-btn {
    border: none;
    background: none;
    cursor: pointer;
    padding: 12px 16px;
  }

  .input-box .password-btn .icon {
    font-size: 18px;
  }

  .error {
    color: ${({ theme }) => theme.colors.error};
    margin: 12px 0px;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .error .icon {
    font-size: 24px;
    display: flex;
  }
`;

export default Wrapper;
