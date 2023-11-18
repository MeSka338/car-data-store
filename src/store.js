import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas";
import CarReducer from "./reducers/CarReducer";

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
