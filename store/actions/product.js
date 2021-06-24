export const CREATE_PRODUCT = 'CREATE_PRODUCT'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT'

export const createProduct = (product) => {
  return { type: CREATE_PRODUCT, product }
}

export const updateProdcut = (productId, product) => {
  return { type: UPDATE_PRODUCT, productId, product }
}

export const removeFromCart = (productId) => {
  return { type: REMOVE_FROM_CART, pid: productId }
}
