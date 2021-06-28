import { COLLECTION, db } from '../../firebase/firebase'
import store from '../index'

export const ADD_ORDER = 'ADD_ORDER'
export const SET_ORDER = 'SET_ORDER'

export const fetchUserOrders = () => {
  const uid = store.getState().auth.uid
  return async (dispatch) => {
    try {
      const orders = []
      const snapshot = await db.collection(COLLECTION.orders).where('from', '==', uid).get()
      snapshot.forEach((doc) => orders.push({ ...doc.data(), id: doc.id }))
      dispatch({ type: SET_ORDER, orders })
    } catch (err) {
      console.log(err)
    }
  }
}

export const addOrder = (cartItems, totalAmout) => {
  return async (dispatch) => {
    const uid = store.getState().auth.uid
    try {
      const newOrder = {
        from: uid,
        items: cartItems.map((item) => ({
          productId: item.productId,
          productPrice: item.productPrice,
          productTitle: item.productTitle,
          quantity: item.quantity,
        })),
        totalAmout,
        createdAt: new Date(),
      }
      await db.collection(COLLECTION.orders).add(newOrder)
      // also delet selected cartItems
      cartItems.forEach(async (item) => {
        await db.collection(COLLECTION.carts).doc(item.id).delete()
      })

      dispatch({ type: ADD_ORDER, order: { cartItems, totalAmout } })
    } catch (err) {
      console.log(err)
    }
  }
}
