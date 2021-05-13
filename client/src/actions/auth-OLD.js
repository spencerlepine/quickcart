

// // import { auth } from "../firebase"
// // import {} from "../constants/actionTypes.js"

// // action creators
// export const signupUser = (email, password) => async (dispatch) => {
//   try {
//     await auth.createUserWithEmailAndPassword(email, password)
//   } catch (error) {
//     console.log(error.message)
//   }
// }

// export const loginUser = (email, password) => async (dispatch) => {
//   try {
//     await auth.signInWithEmailAndPassword(email, password)
//   } catch (error) {
//     console.log(error.message)
//   }
// }

// export const logoutUser = () => async (dispatch) => {
//   try {
//     await auth.signOut()
//   } catch (error) {
//     console.log(error.message)
//   }
// }

// export const resetUserPassword = (email) => async (dispatch) => {
//   try {
//     await auth.sendPasswordResetEmail(email)
//   } catch (error) {
//     console.log(error.message)
//   }
// }

// /*
// export const updateEmail = (email) => async (dispatch) => {
//   try {
//     await currentUser.updateEmail(email)
//   } catch (error) {
//     console.log(error.message)
//   }
// }

// export const updatePassword = (email) => async (dispatch) => {
//   try {
//     await currentUser.updatePassword(password)
//   } catch (error) {
//     console.log(error.message)
//   }
// }
// */