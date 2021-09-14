import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";
import createFilter from "redux-persist-transform-filter";

import reducers from "./reducer";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
// const composeEnhancers =
//   (typeof window !== "undefined" &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['alert', 'payment', 'finance'],
    transforms: [createFilter('user', ['user', 'isSignedIn'])],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
  persistedReducer,
  // composeEnhancers(applyMiddleware(sagaMiddleware))
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
