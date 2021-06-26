import { loginWithEmail, logout } from '../../firebase/firebase'

export const SIGN_UP = 'SIGN_UP'
export const SET_AUTH_USER = 'SET_AUTH_USER'
export const SIGN_OUT = 'SIGN_OUT'

export const signUpWithEmailPasswordName = (email, password, name) => {
  return async (dispatch) => {
    dispatch({ type: SIGN_UP, email, password })
  }
}

export const signInWithEmailAndPassword = (email, password) => {
  return async () => {
    try {
      await loginWithEmail(email, password)
    } catch (err) {
      console.log(err)
    }
  }
}

export const signOut = () => {
  return async (dispatch) => {
    console.log('befor logout');
    await logout()
    dispatch({ type: SET_AUTH_USER, uid: null })
  }
}

export const setAuthUser = (uid) => {
  return async (dispatch) => {
    dispatch({ type: SET_AUTH_USER, uid })
  }
}

