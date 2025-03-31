import { Navigate, Outlet } from "react-router-dom";

const UserPrivateRoute = () => {
    const role = localStorage.getItem("role");  // Get the role from storage

    return role === "user" ? <Outlet /> : <Navigate to="/Login" />;
};

export default UserPrivateRoute;

