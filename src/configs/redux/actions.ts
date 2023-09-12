import { Dispatch } from "react";
import { addProduct } from "./dispatch";
import delay from 'delay';

export const addAProduct = (product: any) => async (dispatch: Dispatch<any>) => {
    await delay(2000)
    return dispatch(addProduct(product));
}