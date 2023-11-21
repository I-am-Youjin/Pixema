import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { useTypedSelector } from "../../store/hooks/useTypedSelector";
const PrivateRoute: any = ({ children }: PropsWithChildren) => {
  const isLoggedIn = useTypedSelector((state) => state.user.token);
  return isLoggedIn ? <Navigate to="/PageNotFound:(" /> : children;
};

export default PrivateRoute;
