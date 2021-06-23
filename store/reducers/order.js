import { ADD_ORDER } from '../actions/order'
import Order from '../../models/order'
import { v4 as uuid } from 'uuid'

const initialState = {
  orders: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      const newOrder = new Order(uuid(), action.order.items, action.order.totalAmout, new Date())
      return {
        ...state,
        orders: state.orders.concat(newOrder),
      }
  }

  // console.log('xxxxxxx');
  return state
}
