import { createStore, combineReducers } from 'redux'
import productReducer from './reducers/product'
import cartReducer from './reducers/cart'

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer
})

const store = createStore(rootReducer)

export default store
