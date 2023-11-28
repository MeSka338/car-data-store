import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./car/sagas";
// import reduser from "./index";
import { reduser } from ".";
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reduser,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
