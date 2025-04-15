import { Navigate, Outlet } from "react-router-dom";

const AdminPrivateRoute = () => {
    const role = localStorage.getItem("role");  // Get the role from storage

    return role === "admin" ? <Outlet /> : <Navigate to="/adminLogin" />;
};

export default AdminPrivateRoute;

