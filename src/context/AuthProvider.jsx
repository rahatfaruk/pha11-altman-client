import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebaseConfig";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext()

function AuthProvider({children}) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // signup
  const createUserWithEP = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass)
  }
  // signin / register
  const signInWithEP = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass)
  }
  // signout
  const logout = () => {
    return signOut(auth)
  }

  // check login status onload website
  useEffect(() => {
    // TODO: TESTUSER ONLY FOR DEVELOPMENT >> 
    // const fakeUser = 'a' && {email: 'ali@mail.com', displayName: 'ali'}
    // setUser(fakeUser); setLoading(false); 
    // return 

    const unsub = onAuthStateChanged(auth, currUser => {
      setUser(currUser)
      setLoading(false)
    })

    // cleanup
    return unsub
  }, [])

  return (  
    <AuthContext.Provider value={
      {user, setUser, createUserWithEP, signInWithEP, logout, loading}
    }>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;