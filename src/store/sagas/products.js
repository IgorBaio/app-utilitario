
import { takeEvery, call, put, fork, select } from "redux-saga/effects";
import { setProductsSuccess } from "../actions";
import { SET_PHOTOS_DATA } from "../actions/types";

function* setProductsSaga() {
  try {
      yield put(
        setProductsSuccess({
          payload: res,
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

function* watchSetProductsSaga() {
  yield takeEvery(SET_PHOTOS_DATA, setProductsSaga);
}

const productsSagas = [
  fork(watchSetProductsSaga),
];

export default productsSagas;
