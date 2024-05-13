import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function RouteGuard({children}) {
  const {user} = useAuth()
  const location = useLocation()

  if (!user) {
    return <Navigate to={'/login'} state={location.pathname} />
  }
  return <div>{children}</div>
}

export default RouteGuard;