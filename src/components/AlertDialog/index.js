import React from "react";
import StyledAlertDialog from "./AlertDialog.styled";
import { FiCheckCircle } from "react-icons/fi";
import { MdOutlineError } from "react-icons/md";
import Button from "../Button";

const AlertDialog = ({
  state,
  status,
  msg,
  onBtnClick = () => {},
  children,
  ...extraProps
}) => {
  return (
    state && (
      <StyledAlertDialog {...extraProps}>
        <span className={`alert-icon ${status ? "success" : "error"}`}>
          {status ? <FiCheckCircle /> : <MdOutlineError />}
        </span>
        <h1>{status ? "Success" : "Error"}</h1>
        <p>{msg}</p>
        <Button className="btn" text="OK" onClick={onBtnClick} />
      </StyledAlertDialog>
    )
  );
};

export default AlertDialog;
