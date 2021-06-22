export const CREATE_PRODUCT = 'CREATE_PRODUCT'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export const createProduct = (product) => {
  return { type: CREATE_PRODUCT, product }
}

export const removeFromCart = (productId) => {
  return { type: REMOVE_FROM_CART, pid: productId }
}
