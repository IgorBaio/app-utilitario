import {
  ITENS,
  LOGIN,
  PAGE,
  SET_INITIALS_STATE,
  GET_CURRENCY_CONVERTED,
  GET_CURRENCY_CONVERTED_SUCCESS
} from "../actions/types";

const initialState = {
  loading: false,
  baseCurrency: null,
  targetCurrency: null,
  convertedValue: null,
};

export default function saveReducer(state = initialState, action) {
  switch (action.type) {
    case SET_INITIALS_STATE:
      return initialState;
    case GET_CURRENCY_CONVERTED:
      console.log('action')
      console.log(action)
      return {
        ...state,
        baseCurrency: action.payload.selectedBaseValue,
        targetCurrency: action.payload.selectedTargetValue,
        valueToConvert: action.payload.valueToConverter
      }
      
    /*
            return {
                ...state,
                loading: true
            }
            */
    case GET_CURRENCY_CONVERTED_SUCCESS:
      console.log(`aq`,action)
      return {
        ...state,
        convertedValue: action.payload.valueConverted
      }
    /*
            return {
                ...state,
                loading: true
            }
            */
    default:
      return state;
  }
};

