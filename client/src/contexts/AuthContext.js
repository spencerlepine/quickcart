import React, { useContext, useState, useEffect } from "react"
import { auth } from "../firebase"
import { signupUser, loginUser, logoutUser, resetUserPassword } from "../actions/auth.js"

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  // function signup(email, password) {
  //   signupUser(email, password)
  // }

  // function login(email, password) {
  //   loginUser(email, password)
  // }

  // function logout() {
  //   logoutUser()
  // }

  // function resetPassword(email) {
  //   resetUserPassword(email)
  // }

  // function updateEmail(email) {
  //   currentUser.updateEmail(email)
  // }

  // function updatePassword(password) {
  //   currentUser.updatePassword(password)
  // }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}