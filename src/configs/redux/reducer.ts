import { actionType, productCartType } from "@/interfaces/cart"

export const ADD_CART = 'ADD_CART'
export const UPDATE_CART = 'UPDATE_CART'

const initialValue: productCartType[] = []

export const cartReducer = (state = initialValue, action:actionType) => {
  switch (action.type) {
    case ADD_CART:
      return state.concat({
        id: action.payload.id,
        product: action.payload,
      })
    case UPDATE_CART:
      return state.map(todo => {
        if (todo.id !== action.payload.id) return todo

        return {
          ...todo,
          completed: !todo.completed
        }
      })
    default:
      return state
  }
}