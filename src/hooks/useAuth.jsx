import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

function useAuth() {
  const authInfo = useContext(AuthContext)
  return authInfo
}

export default useAuth;