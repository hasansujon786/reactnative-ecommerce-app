import { v4 as uuid } from 'uuid'
// import Product from '../../models/product';
import { PRODUCTS } from '../../data/dummy'
import Product from '../../models/product'
import { CREATE_PRODUCT, UPDATE_PRODUCT } from '../actions/product'

const initialState = {
  avalableProducts: PRODUCTS,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PRODUCT: {
      const { product } = action
      const newProduct = new Product(
        uuid(),
        'u1',
        product.title,
        product.imageUrl,
        product.description,
        product.price
      )
      return {
        ...state,
        avalableProducts: state.avalableProducts.concat(newProduct),
      }
    }

    case UPDATE_PRODUCT: {
      const { productId, product } = action
      const avalableProducts = [...state.avalableProducts]
      const foundProductIdx = avalableProducts.findIndex((prod) => prod.id == productId)
      avalableProducts[foundProductIdx] = { ...avalableProducts[foundProductIdx], ...product }

      return {
        ...state,
        avalableProducts,
      }
    }
  }

  return state
}
