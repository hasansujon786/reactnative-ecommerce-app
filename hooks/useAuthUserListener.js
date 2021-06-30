import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../firebase/firebase'
import { setAuthUser } from '../store/actions/auth'

export default function useAuthUserListener() {
  const dispatch = useDispatch()
  const uid = useSelector((state) => state.auth.uid)
  const isSignedIn = useSelector((state) => state.auth.isSignedIn)

  useEffect(() => {
    // onAuthStateChanged returns an unsubscriber
    const unsubscribeAuth = auth.onAuthStateChanged(async (authUser) => {
      try {
        dispatch(setAuthUser(authUser ? authUser.uid : null))
      } catch (error) {
        console.log(error)
      }
    })

    // unsubscribe auth listener on unmount
    return unsubscribeAuth
  }, [])

  return { uid, isSignedIn }
}
