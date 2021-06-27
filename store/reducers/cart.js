// import { CART_ITEMS } from '../../data/dummy'
import Cart from '../../models/cart'
import { ADD_TO_CART, REMOVE_FROM_CART, SET_CART } from '../actions/cart'

const initialState = {
  totalAmout: 0,
  items: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CART: {
      const { cartItems } = action
      return {
        ...state,
        totalAmout: cartItems.reduce((ptl, item) => ptl + item.quantity * item.productPrice, 0),
        items: cartItems,
      }
    }

    case ADD_TO_CART: {
      const { product } = action
      let currentAmout = state.totalAmout
      const cartItems = [...state.items]
      const foundItemIdx = cartItems.findIndex((item) => item.productId == product.id)

      if (foundItemIdx < 0) {
        const newCartItem = new Cart(product.id, product.title, product.price, product.imageUrl, 1)
        cartItems.unshift(newCartItem)
        currentAmout += newCartItem.productPrice
      } else {
        let foundCartItem = cartItems[foundItemIdx]
        currentAmout += foundCartItem.productPrice
        cartItems[foundItemIdx] = { ...foundCartItem, quantity: foundCartItem.quantity + 1 }
      }
      return {
        ...state,
        totalAmout: currentAmout,
        items: cartItems,
      }
    }

    case REMOVE_FROM_CART: {
      const { cartId } = action
      const foundItem = state.items.find((item) => item.id == cartId)
      return {
        ...state,
        totalAmout: state.totalAmout - foundItem.quantity * foundItem.productPrice,
        items: state.items.filter((item) => item.id != cartId),
      }
    }
  }

  return state
}
