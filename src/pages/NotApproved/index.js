import React from "react";
import { MdError } from "react-icons/md";
import styled from "@emotion/styled";
import Link from "../../components/Link";

const Styles = styled.div`
  .content {
    position: fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
  }

  .msg {
    margin-top: 10%;
    width: 25%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 25px;
    align-items: center;
  }

  .msg .icon {
    display: flex;
    font-size: 100px;
    color: ${({ theme: { colors } }) => colors.primary};
  }

  .msg .text {
    font-size: 24px;
  }

  .links {
    padding: 25px 60px;
    width: 100%;
  }

  .links a {
    margin-left: auto;
    width: fit-content;
    display: block;
    font-size: 20px;
  }
`;

const NotApproved = () => {
  return (
    <Styles>
      <div className="links">
        <Link to="/logout">Logout</Link>
      </div>
      <div className="content">
        <div className="msg">
          <MdError className="icon" />
          <span className="text">
            You are not Approved By Admin.
            <br />
            Contact Admin to get Approved
          </span>
        </div>
      </div>
    </Styles>
  );
};

export default NotApproved;
