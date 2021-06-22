import { createStore, combineReducers } from 'redux'
import productReducer from './reducers/product'

const rootReducer = combineReducers({
  product: productReducer,
})

const store = createStore(rootReducer)

export default store
