import { COLLECTION, db } from '../../firebase/firebase'
import store from '../index'

export const SET_CART = 'SET_CART'
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export const fetchOnlyUserCarts = () => {
  return async (dispatch) => {
    const uid = store.getState().auth.uid
    const cartItems = []
    const snapshot = await db.collection(COLLECTION.carts).where('uid', '==', uid).get()
    snapshot.forEach((doc) => cartItems.push({ ...doc.data(), id: doc.id }))

    dispatch({ type: SET_CART, cartItems })
  }
}

export const addToCart = (product) => {
  return async (_) => {
    try {
      const uid = await store.getState().auth.uid
      // const foundItemIdx = cartItems.findIndex((item) => item.productId == product.id)
      let cartExists = false
      const snapshot = await db
        .collection(COLLECTION.carts)
        .where('productId', '==', product.id)
        .get()
      snapshot.forEach(async (doc) => {
        if (doc.exists) {
          cartExists = true
          const updatedvalues = { quantity: doc.data().quantity + 1 }
          await db.collection(COLLECTION.carts).doc(doc.id).update(updatedvalues)
          // dispatch({ type: ADD_TO_CART, newCart })
        }
      })

      if (!cartExists) {
        const newCart = {
          productId: product.id,
          productTitle: product.title,
          productPrice: product.price,
          imageUrl: product.imageUrl,
          quantity: 1,
          uid,
        }
        await db.collection(COLLECTION.carts).add(newCart)
        // dispatch({ type: ADD_TO_CART, product: newCart })
      }
    } catch (err) {
      /* handle error */
      console.log(err)
    }
  }
}

export const removeFromCart = (cartId) => {
  return async (dispatch) => {
    await db.collection(COLLECTION.carts).doc(cartId).delete()
    dispatch({ type: REMOVE_FROM_CART, cartId })
  }
}
