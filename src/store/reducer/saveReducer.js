import {
  ITENS,
  LOGIN,
  PAGE,
  SET_INITIALS_STATE,
  SET_PHOTOS_DATA,
  SET_PHOTOS_DATA_SUCCESS
} from "../actions/types";

const initialState = {
  itens: [],
  page: 0,
  user: {},
  produtos: [],
  loading: false,
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
    case SET_PHOTOS_DATA:
      state.produtos = action.payload

      return state;
    /*
            return {
                ...state,
                loading: true
            }
            */
    case SET_PHOTOS_DATA_SUCCESS:
      state.produtos = action.produtos;
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
