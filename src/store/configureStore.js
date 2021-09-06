import { createStore, combineReducers } from "redux";
import currencyConversorReducer from './reducer/currencyConversorReducer'

const rootReducer = combineReducers({
    currencyConversor: currencyConversorReducer
})

const configureSaveReducer = () => createStore(rootReducer);

export {configureSaveReducer};