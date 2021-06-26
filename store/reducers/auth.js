import { SET_AUTH_USER } from '../actions/auth'

const initialState = {
  uid: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER:
      console.log(action);
      return {
        ...state,
        uid: action.uid,
      }
  }
  return state
}
