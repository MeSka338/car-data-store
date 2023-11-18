import {
  takeEvery,
  put,
  call,
  all,
  fork,
  take,
} from "@redux-saga/core/effects";

import { SetCars } from "@/actions/CarActions";
import {
  getCarsApi,
  addCarsApi,
  editCarsApi,
  deleteCarsApi,
} from "@/pages/api/hello";

export function* setCarWorker() {
  const cars = yield call(getCarsApi);
  yield put(SetCars(cars.data));
}

export function* addCarWorker({ payload }) {
  yield call(addCarsApi, payload);
}

export function* editCarWorker({ payload }) {
  yield call(editCarsApi, payload);
}

export function* deleteCarWorker({ payload }) {
  yield call(deleteCarsApi, payload);
}

export function* setCarWatcher() {
  yield takeEvery("GET_CARS", setCarWorker);
}
export function* addCarWatcher() {
  yield takeEvery("ADD_CARS", addCarWorker);
}
export function* editCarWatcher() {
  yield takeEvery("EDIT_CARS", editCarWorker);
}
export function* deleteCarWatcher() {
  yield takeEvery("DELETE_CARS", deleteCarWorker);
}

export default function* rootSaga() {
  yield all([
    fork(setCarWatcher),
    fork(addCarWatcher),
    fork(editCarWatcher),
    fork(deleteCarWatcher),
  ]);
}
