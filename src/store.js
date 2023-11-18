import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import CarReducer from "./reducers/CarReducer";

const reduser = combineReducers({
  Car: CarReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reduser,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
