import Styles from "./Styled";
import Home from "./Home";
import { Outlet } from "react-router-dom";

const StudentDashboard = () => {
  return (
    <Styles>
      <Outlet />
    </Styles>
  );
};

export default StudentDashboard;
