import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebaseConfig";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import Loading from "../comps/Loading";

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
  // google login
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider()
    return signInWithPopup(auth, provider)
  }
  // signout
  const logout = () => {
    return signOut(auth)
  }

  // check login status onload website
  useEffect(() => {
    // TODO: TESTUSER ONLY FOR DEVELOPMENT >> 
    const fakeUser = 'a' && {email: 'user1@example.com', displayName: 'ali', photoURL: 'https://dummyimage.com/100/000/fff&text=a'}
    setTimeout(() => {setUser(fakeUser); setLoading(false); }, 1000)
    return 

    const unsub = onAuthStateChanged(auth, currUser => {
      setUser(currUser)
      setLoading(false)
    })

    // cleanup
    return unsub
  }, [])

  if (loading) {
    return <Loading />
  }
  return (  
    <AuthContext.Provider value={
      {user, setUser, createUserWithEP, signInWithEP, signInWithGoogle, logout, loading}
    }>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;