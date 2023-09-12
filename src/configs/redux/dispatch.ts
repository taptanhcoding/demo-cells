import { productCartType } from "@/interfaces/cart"
import { ADD_CART, UPDATE_CART } from "./reducer"

export const addProduct = (product: productCartType) => ({
    type: ADD_CART,
    payload: product
  })
  
  export const removeProduct = (id:string) => ({
    type: UPDATE_CART,
    payload: { id }
  })  