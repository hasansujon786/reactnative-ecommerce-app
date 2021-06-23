import Cart from '../../models/cart'
import { ADD_TO_CART } from '../actions/cart'

const initialState = {
  items: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const pdt = action.product
      const cartItem = new Cart(pdt.title, pdt.price, pdt.imageUrl, 1, pdt.price)
      // const newOrder = new Product(
      //   new Date().toString(),
      //   action.orderData.items,
      //   action.orderData.amount,
      //   new Date()
      // );
      return {
        ...state,
        items: { ...state.items, [pdt.id]: cartItem },
      }
  }

  return state
}
