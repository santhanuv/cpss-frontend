import { useState } from "react";
import StyledProgressBar from "./ProgressBar.styled";
import { GiCheckMark } from "react-icons/gi";

const ProgressBar = ({ steps = [], currentStep = 0 }) => {
  return (
    <StyledProgressBar factor={steps.length - 1} currStep={currentStep}>
      <div className="progress-bar"></div>
      {steps.map((step, index) => (
        <div
          className={`step ${
            index === currentStep ? "active" : index < currentStep ? "done" : ""
          }`}
          key={step}
        >
          {index < currentStep && (
            <span className="icon">
              <GiCheckMark />
            </span>
          )}
          <span className="text">{step}</span>
        </div>
      ))}
    </StyledProgressBar>
  );
};

export default ProgressBar;
