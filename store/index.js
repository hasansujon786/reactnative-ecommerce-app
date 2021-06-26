import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import productReducer from './reducers/product'
import cartReducer from './reducers/cart'
import orderReducer from './reducers/order'
import authReducer from './reducers/auth'

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
  order: orderReducer,
  auth: authReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
