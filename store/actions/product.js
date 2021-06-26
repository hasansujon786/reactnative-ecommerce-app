import {db} from '../../firebase/firebase'
import Product from '../../models/product'

export const SET_PRODUCT = 'SET_PRODUCT'
export const CREATE_PRODUCT = 'CREATE_PRODUCT'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT'

export const fetchProduct = () => {
  return async (dispatch) => {
    const fetchedProducts = []
    const snapshot = await db.collection('products').get()
    snapshot.forEach((doc) => {
      const data = doc.data()
      const product = new Product(
        doc.id,
        data.uid,
        data.title,
        data.imageUrl,
        data.description,
        data.price
      )
      fetchedProducts.push(product)
    })

    dispatch({ type: SET_PRODUCT, products: fetchedProducts })
  }
}

export const createProduct = (product) => {
  return { type: CREATE_PRODUCT, product }
}

export const updateProdcut = (productId, product) => {
  return { type: UPDATE_PRODUCT, productId, product }
}

export const removeFromCart = (productId) => {
  return { type: REMOVE_FROM_CART, pid: productId }
}
