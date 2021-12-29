
import { takeEvery, call, put, fork, select } from "redux-saga/effects";
import { getCurrencyConvertedSuccess } from "../actions";
import { GET_CURRENCY_CONVERTED } from "../actions/types";
import { getCurrencyConversorValue } from "../api";

function* getCurrencyConversorSaga(obj) {
  try {
    const valueConverted = yield call(getCurrencyConversorValue, obj);
   
      yield put(
        getCurrencyConvertedSuccess({
          valueConverted,
        })
      );
  } catch (error) {
    // yield put(
    //   toggleAlert(true, {
    //     message: "Erro na captura das cidades e estados",
    //   })
    // );
  }
}

function* watchGetCurrencyConversorSaga() {
  yield takeEvery(GET_CURRENCY_CONVERTED, getCurrencyConversorSaga);
}

const productsSagas = [
  fork(watchGetCurrencyConversorSaga),
];

export default productsSagas;
