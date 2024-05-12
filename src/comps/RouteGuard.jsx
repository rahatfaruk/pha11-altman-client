import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function RouteGuard({children}) {
  const {user} = useAuth()

  if (!user) {
    return <Navigate to={'/login'} />
  }
  return <div>{children}</div>
}

export default RouteGuard;