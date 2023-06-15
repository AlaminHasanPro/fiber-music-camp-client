import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { AuthContext } from "../Provider/AuthProvider";

const AdminOnly = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const { isLoading, role } = useAuthorization();
  const location = useLocation();
  if (loading || isLoading) {
    return;
  }

  if (user.email && role === "admin") {
    return children;
  }
  return <Navigate state={{ from: location }} to="/" replace />;
};

export default AdminOnly;
