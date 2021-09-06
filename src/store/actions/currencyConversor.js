import { GET_CURRENCY_CONVERTED, GET_CURRENCY_CONVERTED_SUCCESS } from "./types";

export const getCurrencyConverted = (payload) => ({
    type: GET_CURRENCY_CONVERTED,
    payload
  })

export const getCurrencyConvertedSuccess = (payload) => ({
    type: GET_CURRENCY_CONVERTED_SUCCESS,
    payload
  })