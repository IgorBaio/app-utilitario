import { SET_PHOTOS_DATA, SET_PHOTOS_DATA_SUCCESS } from "./types";

export const setProducts = (payload) => ({
    type: SET_PHOTOS_DATA,
    payload
  })

export const setProductsSuccess = (payload) => ({
    type: SET_PHOTOS_DATA_SUCCESS,
    payload
  })