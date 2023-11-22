import {
  GET_CARS,
  SET_CARS,
  ADD_CARS,
  EDIT_CARS,
  DELETE_CARS,
} from "./actions";

export const GetCars = () => ({
  type: GET_CARS,
});

export const SetCars = (payload) => ({
  type: SET_CARS,
  payload,
});

export const AddCars = (car) => ({
  type: ADD_CARS,
  payload: car,
});

export const EditCars = (editCar) => ({
  type: EDIT_CARS,
  payload: editCar,
});

export const DeleteCars = (id) => ({
  type: DELETE_CARS,
  payload: id,
});
