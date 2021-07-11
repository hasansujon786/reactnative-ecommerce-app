export const SIGN_UP = 'SIGN_UP'
export const SET_AUTH_USER = 'SET_AUTH_USER'
export const SIGN_OUT = 'SIGN_OUT'

// export const signUpWithEmailPasswordName = (email, password, name) => {
//   return async (dispatch) => {
//   }
// }

// export const signInWithEmailAndPassword = (email, password) => {
//   return async (dispatch) => {
//   }
// }

// export const signOut = () => {
//   return async (dispatch) => {
//   }
// }

export const setAuthUser = (uid) => {
  return async (dispatch) => {
    dispatch({ type: SET_AUTH_USER, uid })
  }
}
