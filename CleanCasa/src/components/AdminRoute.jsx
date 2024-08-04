import { Navigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";

const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  if (!token) return null;
  try {
    return jwtDecode(token);
  } catch (error) {
    console.error('Token decoding failed:', error);
    return null;
  }
};

const AdminRoute = ({ children }) => {
  const user = isAuthenticated();

  if (!user) {
    return <Navigate to="/signin" />;
  }

  if (user.role !== 'admin') {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default AdminRoute;
