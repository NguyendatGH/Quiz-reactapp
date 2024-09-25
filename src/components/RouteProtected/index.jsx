import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
export default function ProtectedRoute({ children }) {
  const isAuthenticated =
    localStorage.getItem("username") && localStorage.getItem("password");

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children;
}

ProtectedRoute.propTypes = {
    children : PropTypes.element.isRequired,
}