import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

type PrivateRouteType = {
  children: JSX.Element;
};
function PublicRoute({ children }: PrivateRouteType) {
  const { user } = useContext(AuthContext);
  return user ? <Navigate to="/" /> : children;
}

export default PublicRoute;
