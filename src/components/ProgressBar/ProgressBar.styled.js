import styled from "@emotion/styled";

const StyledProgressBar = styled.div`
  width: fit-content;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  counter-reset: step;
  font-size: 20px;
  font-weight: bold;

  ::before,
  .progress-bar {
    content: "";
    height: 4px;
    width: 100%;
    position: absolute;
    background-color: ${({ theme: { colors } }) => colors.textGrey};
    background-color: lightGrey;
    z-index: -1;
  }

  .progress-bar {
    background-color: ${({ theme: { colors } }) => colors.complimentary};
    width: ${({ factor, currStep }) =>
      `calc((100% / ${factor}) * ${currStep})`};

    transition: width 250ms ease-in-out;
  }

  .step {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    ${({ theme: { colors } }) =>
      `background-color: ${colors.lightGrey}; 
      color: ${colors.textPrimary};
    `};
    display: flex;
    justify-content: center;
    align-items: center;
    transition: color, background-color 150ms ease-in 150ms;
  }

  .step.done {
    ${({ theme: { colors } }) =>
      `background-color: ${colors.complimentary}; 
      color: ${colors.background};
    `};
    animation: scale-step 300ms;
  }

  .step.active {
    ${({ theme: { colors } }) =>
      `background-color: ${colors.primary}; 
      color: ${colors.background};
    `};
  }

  @keyframes scale-step {
    0% {
      transform: scale(1);
    }

    50% {
      transform: scale(1.03);
    }

    100% {
      transform: scale(1);
    }
  }

  .step::before {
    counter-increment: step;
    content: counter(step);
  }

  .step.done::before {
    content: "";
    display: block;
    background-image: url("../../assets/images/tick-mark.svg");
  }

  .step span {
    position: absolute;
    top: calc(100% + 10px);
    font-size: ${({
      theme: {
        typo: {
          label: { regular },
        },
      },
    }) => regular.fontSize};
    color: ${({ theme: { colors } }) => colors.textPrimary};
  }

  .step .icon {
    position: static;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: ${({ theme: { colors } }) => colors.background};
  }
`;

export default StyledProgressBar;
