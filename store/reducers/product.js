import { CREATE_PRODUCT, SET_PRODUCT, UPDATE_PRODUCT } from '../actions/product'

const initialState = {
  avalableProducts: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT: {
      return {
        ...state,
        avalableProducts: action.products,
      }
    }

    case CREATE_PRODUCT: {
      const { newProduct } = action
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
