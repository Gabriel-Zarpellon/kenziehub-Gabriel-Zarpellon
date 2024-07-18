import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoutes() {
  let { user } = useContext(UserContext);

  return user ? <Outlet /> : <Navigate to="/" />;
}
