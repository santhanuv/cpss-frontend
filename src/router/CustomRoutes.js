import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/UserDashboard";
import Login from "../pages/Login/";
import PersistLogin from "../components/PersistLogin";
import RequireAuth from "../components/RequireAuth";
import StudentDashboard from "../pages/StudentDashboard";
import useAuth from "../hooks/useAuth";
import Home from "../pages/StudentDashboard/Home";
import MyData from "../pages/StudentDashboard/MyData";
import Logout from "../components/Logout";

const CustomRoutes = () => {
  const { auth } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="login" element={<Login />} />
      <Route path="logout" element={<Logout />} />
      <Route element={<PersistLogin />}>
        <Route element={<RequireAuth requiredRole="*" />}>
          <Route path="dashboard" element={<Dashboard />}>
            <Route element={<RequireAuth requiredRole="student" />}>
              <Route path="student" element={<StudentDashboard />}>
                <Route index={true} element={<Home />} />
                <Route path="mydata" element={<MyData />} />
              </Route>
            </Route>
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default CustomRoutes;
