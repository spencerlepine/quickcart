import React, { useState, useEffect, useContext } from "react"
import { auth, storage } from "../../api/firebase.js"

export const AuthContext = React.createContext()

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function loginUser(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function signupUser(displayName, email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
      .then(async (res) => {
        const user = auth.currentUser;

        return user.updateProfile({
          displayName: displayName,
        })
      })
  }

  async function updateProfilePic(newFile) {
    // Exit the function if newFile doesn't exist
    const user = auth.currentUser;

    // Create a Storage Ref w/ username
    var storageRef = await storage.ref(user.uid + '/profilePicture/avatar.png');
    
    // Upload file
    var task = await storageRef.put(newFile);

    // Save the link to the image
    var imageUrl = await storageRef.getDownloadURL().then(url => url)

    await user.updateProfile({
      photoURL: imageUrl
    })
    
    return imageUrl
  }

  function logoutUser() {
    return auth.signOut()
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    loginUser,
    logoutUser,
    signupUser,
    updateProfilePic,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  const { currentUser, loginUser, signupUser, logoutUser, updateProfilePic } = useContext(AuthContext);
  
  return {
    currentUser,
    loginUser,
    logoutUser,
    signupUser,
    updateProfilePic,
  };
};

export default useAuth;