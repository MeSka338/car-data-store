import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./_redux/car/sagas";

import CarReducer from "./_redux/car/reducer";

const sagaMiddleware = createSagaMiddleware();

const reduser = combineReducers({
  CarReducer,
});

const store = createStore(
  reduser,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
