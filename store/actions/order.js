export const ADD_ORDER = 'ADD_ORDER'

export const addOrder = (items, totalAmout) => {
  return { type: ADD_ORDER, order: { items, totalAmout } }
}
