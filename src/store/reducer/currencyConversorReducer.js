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
  baseCurrency:null,
  targetCurrency:null,
  convertedValue: null,
};

const saveReducer = (state = initialState, action) => {
  switch (action.type) {
    case ITENS:
      state.itens = action.itens;
      return state;
    case PAGE:
      state.page = action.page;
      return state;
    case LOGIN:
      state.user = action.user;
      return state;
    case SET_INITIALS_STATE:
      state = initialState;
      return state;
    case GET_CURRENCY_CONVERTED:
      console.log('action')
      console.log(action)
      state.baseCurrency = action.payload.selectedBaseValue
      state.targetCurrency = action.payload.selectedTargetValue;
      state.valueToConvert = action.payload.valueToConverter

      return state;
    /*
            return {
                ...state,
                loading: true
            }
            */
    case GET_CURRENCY_CONVERTED_SUCCESS:
      state.convertedValue = action.convertedValue;
      // state.produtos = action.payload

      return state;
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

export default saveReducer;
