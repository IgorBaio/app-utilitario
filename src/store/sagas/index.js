import { all } from "redux-saga/effects";

import currencyConversorSagas from "./currencyConversor";

export default function* rootSaga() {
  yield all([
    ...currencyConversorSagas, 
  ]);
}
