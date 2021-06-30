import { SET_AUTH_USER } from '../actions/auth'

const initialState = {
  uid: null,
  isSignedIn: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER:
      console.log(action)
      return {
        ...state,
        uid: action.uid,
        isSignedIn: action.uid ? true : false,
      }
  }
  return state
}
