import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Dashboard from "../pages/UserDashboard";
import Login from "../pages/Login/";
import PersistLogin from "../components/PersistLogin";
import RequireAuth from "../components/RequireAuth";
import StudentDashboard from "../pages/StudentDashboard";
import useAuth from "../hooks/useAuth";
import StudentHome from "../pages/StudentDashboard/Home";
import StudentProfile from "../pages/StudentDashboard/Profile";
import AdvisorDashboard from "../pages/AdivsorDashboard";
import AdvisorHome from "../pages/AdivsorDashboard/Home";
import AdvisorVerify from "../pages/AdivsorDashboard/Verify";
import AdvisorVerifyProfile from "../pages/AdivsorDashboard/VerifyProfile";
import AdminDashboard from "../pages/AdminDashboard";
import AdminHome from "../pages/AdminDashboard/Home";
import AdminNewAdvisors from "../pages/AdminDashboard/NewAdvisors";
import AdminExportData from "../pages/AdminDashboard/ExportData";
import Logout from "../components/Logout";
import Regsiter from "../pages/Register";
import StudentRegister from "../pages/Register/Student";
import AdvisorRegister from "../pages/Register/Advisor";
import NotApproved from "../pages/NotApproved";

const CustomRoutes = () => {
  const { auth } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="login" element={<Login />} />
      <Route path="/register" element={<Regsiter />} />
      <Route path="logout" element={<Logout />} />
      <Route element={<PersistLogin />}>
        <Route element={<RequireAuth requiredRole="*" />}>
          <Route element={<RequireAuth requiredRole="student" />}>
            <Route path="student" element={<Outlet />}>
              <Route path="register" element={<StudentRegister />} />
              <Route element={<Dashboard />}>
                <Route element={<StudentDashboard />}>
                  <Route index={true} element={<StudentProfile />} />
                  {/* <Route path="home" element={<StudentHome />} /> */}
                </Route>
              </Route>
            </Route>
          </Route>
          <Route element={<RequireAuth requiredRole="advisor" />}>
            <Route path="advisor" element={<Outlet />}>
              <Route path="register" element={<AdvisorRegister />} />
              <Route path="not-approved" element={<NotApproved />} />
              <Route element={<Dashboard />}>
                <Route element={<AdvisorDashboard />}>
                  <Route index={true} element={<AdvisorHome />} />
                  <Route path="verify" element={<AdvisorVerify />}>
                    <Route path="profile" element={<AdvisorVerifyProfile />} />
                  </Route>
                </Route>
              </Route>
            </Route>
          </Route>
          <Route element={<RequireAuth requiredRole="admin" />}>
            <Route path="admin" element={<Outlet />}>
              <Route element={<Dashboard />}>
                <Route element={<AdminDashboard />}>
                  <Route index={true} element={<AdminHome />} />
                  <Route path="new-advisors" element={<AdminNewAdvisors />} />
                  <Route path="export" element={<AdminExportData />} />
                </Route>
              </Route>
            </Route>
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default CustomRoutes;
