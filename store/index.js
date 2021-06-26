import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import productReducer from './reducers/product'
import cartReducer from './reducers/cart'
import orderReducer from './reducers/order'

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
  order: orderReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
