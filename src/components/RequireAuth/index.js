import { Navigate, useLocation, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const RequireAuth = ({ requiredRole }) => {
  const { auth } = useAuth();
  const location = useLocation();

  return auth?.accessToken ? (
    requiredRole === "*" || auth?.role === requiredRole ? (
      <Outlet />
    ) : (
      <Navigate to="/unathuarized" replace />
    )
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
