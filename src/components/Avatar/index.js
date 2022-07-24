import { StyledContentWrapper, StyledWrapper, Styles } from "./Wrapper";
import { StyledIconUp, StyledIconDown } from "./StyledIcon";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import userLogout from "../../utility/userLogout";

const Avatar = ({ name = "Santhanu", ...extraProps }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpen = (e) => {
    setOpen((prev) => !prev);
  };

  const logoutHandler = async (e) => {
    const status = await userLogout();
    if (status) navigate("/login", { replace: true });
  };

  return (
    <Styles {...extraProps}>
      <StyledWrapper onClick={handleOpen}>
        <StyledContentWrapper>{name.charAt(0)}</StyledContentWrapper>
        {open ? <StyledIconUp /> : <StyledIconDown />}
        {open && (
          <div className="drop-down">
            <ul>
              <li>
                <button className="item" onClick={logoutHandler}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </StyledWrapper>
    </Styles>
  );
};

export default Avatar;
