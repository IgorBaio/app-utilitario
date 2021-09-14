import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

import currencyConversorReducer from "./currencyConversorReducer";



export default combineReducers({
  currency: currencyConversorReducer,
});
