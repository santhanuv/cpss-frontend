import styled from "@emotion/styled";

const Styles = styled.div`
  .my-status {
    margin-bottom: 30px;
    font-size: 20px;
    display: flex;
    gap: 25px;
    align-items: center;
  }

  .export-btn {
    width: 200px;
    margin-left: auto;
  }

  .my-status span {
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;
  }

  .my-status .verified {
    ${({ theme: { colors } }) => `color: ${colors.complimentary};`}
    text-transform: uppercase;
    letter-spacing: 0.3px;
  }

  .my-status .verified .icon {
    font-size: 24px;
  }
  .my-status .not-verified .icon {
    font-size: 24px;
  }

  .my-status .rejected .icon {
    font-size: 24px;
  }

  .my-status .not-verified {
    color: #a7ac20;
    text-transform: uppercase;
    letter-spacing: 0.3px;
  }

  .my-status .rejected {
    color: ${({ theme: { colors } }) => colors.error};
    text-transform: uppercase;
    letter-spacing: 0.3px;
  }

  .selector {
    display: flex;
    gap: 100px;
    width: 100%;
    margin-bottom: 30px;
  }
  .selector #active {
    ${({ theme: { colors } }) => `color: ${colors.complimentary}`};
    /* text-decoration: underline; */
    font-weight: 600;
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
      `font-size: ${label.largePlus.fontSize};
      font-weight: ${label.largePlus.fontWeight};
      color: ${colors.textPrimary};
      :hover {
        color: ${colors.complimentary};
    }
      `};
    text-decoration: none;
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
    margin: 15px 0;
  }

  .info-head h2 {
    margin: 0;
  }

  .info-head .icon {
    font-size: 24px;
  }

  h6 {
    font-size: 16px;
    font-weight: normal;
    width: 200px;
  }

  #email {
    content: "You can't change your email id";
  }

  .info-head button {
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    padding: 10px;
    cursor: pointer;
    border-radius: 50%;

    :hover {
      background-color: ${({ theme: { colors } }) => colors.lightGrey};
    }
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
    cursor: pointer;
    gap: 120px;
    margin-bottom: 16px;
    align-items: center;
    border-bottom: 1px solid lightgray;
    width: fit-content;

    ${({ theme: { colors } }) =>
      `:hover {background-color: ${colors.hoverGrey};}`}
  }

  .info-card .info .icon-box {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    font-size: 18px;
  }

  .icon {
    font-size: 20px;
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
`;

// const Styles = styled.div`
// .selector {
//   display: flex;
//   gap: 100px;
//   width: 100%;
// }

// .selector #active {
//   ${({ theme: { colors } }) => `color: ${colors.complimentary}`};
//   text-decoration: underline;
//   font-weight: 500;
//   text-underline-offset: 4px;
// }

// .selector button {
//   cursor: pointer;
//   border: none;
//   background: none;
//   text-underline-offset: 4px;
//   ${({
//     theme: {
//       typo: { label },
//       colors,
//     },
//   }) =>
//     `font-size: ${label.regular.fontSize};
//     font-weight: ${label.regular.fontWeight};
//     color: ${colors.textPrimary};
//     :hover {
//       color: ${colors.complimentary};
//       text-decoration: underline;
//   }
//     `};
//   text-decoration: none;
// }

//   .content {
//     margin-top: 50px;
//   }

// .content h1 {
//   margin-bottom: 25px;
//   ${({
//     theme: {
//       typo: { title },
//     },
//   }) =>
//     ` font-size: ${title.smallPlus.fontSize};
//       font-weight: ${title.smallPlus.fontWeight};
//     `};
// }

//   .edit-icon {
//     background: none;
//     border: none;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     gap: 8px;
//     cursor: pointer;
//     ${({
//       theme: {
//         typo: { label },
//       },
//     }) =>
//       ` font-size: ${label.regularPlus.fontSize};
//         font-weight: ${label.regularPlus.fontWeight};
//       `};

//     :hover {
//       ${({ theme: { colors } }) => `color: ${colors.complimentary}`}
//     }
//   }

//   .edit-icon .icon {
//     font-size: 20px;
//   }
// `;

export default Styles;
