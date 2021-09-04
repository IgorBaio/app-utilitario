import { all } from "redux-saga/effects";

import productsSagas from "./products";

export default function* rootSaga() {
  yield all([
    ...productsSagas, 
  ]);
}
