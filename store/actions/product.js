import { COLLECTION, db } from '../../firebase/firebase'
import Product from '../../models/product'
import {PRODUCTS} from '../../data/dummy'

export const SET_PRODUCT = 'SET_PRODUCT'
export const CREATE_PRODUCT = 'CREATE_PRODUCT'
export const DELETE_PRODUCT = 'DELETE_PRODUCT'
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export const fetchProduct = () => {
  return async (dispatch) => {
    const fetchedProducts = PRODUCTS
    // const snapshot = await db.collection(COLLECTION.products).get()
    // snapshot.forEach((doc) => {
    //   const data = doc.data()
    //   const product = new Product(
    //     doc.id,
    //     data.uid,
    //     data.title,
    //     data.imageUrl,
    //     data.description,
    //     data.price
    //   )
    //   fetchedProducts.push(product)
    // })

    dispatch({ type: SET_PRODUCT, products: fetchedProducts })
  }
}

export const createProduct = (product) => {
  return async (dispatch) => {
    try {
      const docRef = await db.collection(COLLECTION.products).add(product)
      const newProduct = new Product(
        docRef.id,
        product.uid,
        product.title,
        product.imageUrl,
        product.description,
        product.price
      )
      dispatch({ type: CREATE_PRODUCT, newProduct })
    } catch (err) {
      /* handle error */
      console.log(err)
    }
  }
}

export const deleteProduct = (productId) => {
  return async (dispatch) => {
    try {
      await db.collection(COLLECTION.products).doc(productId).delete()
      dispatch({ type: DELETE_PRODUCT, productId })
    } catch (error) {
      console.log(error)
    }
  }
}

export const updateProdcut = (productId, updatedProduct) => {
  return async (dispatch) => {
    try {
      await db.collection(COLLECTION.products).doc(productId).update(updatedProduct)
      dispatch({ type: UPDATE_PRODUCT, productId, product: updatedProduct })
    } catch (err) {
      console.log(err)
    }
  }
}

export const fetchOneProductById = (productId) => {
  return async () => {
    const doc = await db.collection(COLLECTION.products).doc(productId).get()
    const data = doc.data()
    data.id = doc.id
    console.log('fetchOneProductById', data)
    // dispatch({ type: CREATE_PRODUCT, product })
  }
}

export const removeFromCart = (productId) => {
  return { type: REMOVE_FROM_CART, pid: productId }
}
