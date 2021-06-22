import { CREATE_PRODUCT } from '../actions/product'
// import Product from '../../models/product';
import { PRODUCTS } from '../../data/dummy'
const initialState = {
  avalableProducts: PRODUCTS,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PRODUCT:
      console.log('CREATE_PRODUCT')
    // const newOrder = new Product(
    //   new Date().toString(),
    //   action.orderData.items,
    //   action.orderData.amount,
    //   new Date()
    // );
    // return {
    //   ...state,
    //   orders: state.orders.concat(newOrder)
    // };
  }

  // console.log('xxxxxxx');
  return state
}
