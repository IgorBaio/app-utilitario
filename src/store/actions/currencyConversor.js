import { GET_CURRENCY_CONVERTED, GET_CURRENCY_CONVERTED_SUCCESS, SET_INITIALS_STATE } from "./types";

export const getCurrencyConverted = (payload) => ({
    type: GET_CURRENCY_CONVERTED,
    payload
  })

export const getCurrencyConvertedSuccess = (payload) => ({
    type: GET_CURRENCY_CONVERTED_SUCCESS,
    payload
  })

  export const setInitialsState = (payload) => ({
    type: SET_INITIALS_STATE,
    
  })