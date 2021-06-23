import { createStore, combineReducers } from 'redux'
import productReducer from './reducers/product'
import cartReducer from './reducers/cart'
import orderReducer from './reducers/order'

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
  order: orderReducer,
})

const store = createStore(rootReducer)

export default store
