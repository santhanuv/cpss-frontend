import styled from "@emotion/styled";

const Styles = styled.div`
  .content {
    width: fit-content;
  }
  .breadcrumbs {
    display: flex;
    align-items: center;
    padding: 25px 0;
    gap: 10px;
  }

  .breadcrumbs .link {
    font-size: 20px;
    font-weight: 500;
    border: none;
    background: none;
    cursor: pointer;
    ${({ theme: { colors } }) =>
      `color: ${colors.textPrimary}; :hover { color: ${colors.complimentary}}`};
  }

  .breadcrumbs .icon {
    font-size: 30px;
    color: ${({ theme: { colors } }) => colors.textPrimary};
    margin: 0 15px;
  }

  .breadcrumbs .text {
    font-size: 20px;
    font-weight: 500;
    color: ${({ theme: { colors } }) => colors.complimentary};
  }

  .content h2 {
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

  .info-section {
    width: fit-content;
  }

  .info-head {
    display: flex;
    justify-content: space-between;
    margin: 30px 0;
  }

  .info-head h2 {
    margin: 0;
  }

  h6 {
    font-size: 16px;
    font-weight: normal;
    width: 200px;
  }

  .info-card {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
      rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
      rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
    width: fit-content;
    border-radius: 10px;
    padding: 30px 60px;
    margin-bottom: 50px;
  }

  .info-card .info {
    display: flex;
    padding: 16px;
    gap: 120px;
    margin-bottom: 16px;
    align-items: center;
    border-bottom: 1px solid lightgray;
    width: fit-content;
  }

  .info-card .info .icon-box {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    font-size: 18px;
  }

  .info-card .last {
    border-bottom: 0px;
    padding: 16px 16px 0px 16px;
  }

  .info-card .info h4 {
    font-size: 18px;
    font-weight: normal;
    width: 250px;
  }

  .info-card .empty-skills {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }

  .info-card .empty-skills .text {
    font-size: 20px;
  }

  .info-card .empty-skills .icon {
    font-size: 30px;
    color: ${({ theme: { colors } }) => colors.error};
  }

  .action-btns {
    display: flex;
    gap: 50px;
    justify-content: space-between;
    width: 100%;
  }

  .action-btns button {
    border: none;
    background: none;
    cursor: pointer;
    padding: 8px 16px;
    font-size: 20px;
    width: 200px;
    border-radius: 4px;
    color: ${({ theme: { colors } }) => colors.background};
  }

  .action-btns .approve {
    background-color: ${({ theme: { colors } }) => colors.complimentary};
  }

  .action-btns .reject {
    background-color: #aa3131;
  }
`;

export default Styles;
