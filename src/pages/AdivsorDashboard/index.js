import { Outlet } from "react-router-dom";
import StyledAD from "./AD.Styled";

const AdvisorDashboard = () => {
  return (
    <StyledAD>
      <Outlet />
    </StyledAD>
  );
};

export default AdvisorDashboard;
