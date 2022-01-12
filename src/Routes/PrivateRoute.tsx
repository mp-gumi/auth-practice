import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

type PrivateRouteType = {
  children: JSX.Element;
};
function PrivateRoute({ children }: PrivateRouteType) {
  const { user } = useContext(AuthContext);
  return user ? children : <Navigate to="/signin" />;
}

export default PrivateRoute;
