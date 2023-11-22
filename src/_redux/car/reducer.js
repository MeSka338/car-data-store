import {
  GET_CARS,
  SET_CARS,
  ADD_CARS,
  EDIT_CARS,
  DELETE_CARS,
} from "./actions";

const CarReducer = (state = { cars: [], loaded: false }, { type, payload }) => {
  switch (type) {
    case ADD_CARS:
      return {
        ...state,
        cars: [...state.cars, payload],
      };

    case EDIT_CARS:
      return {
        ...state,
        cars: state.cars.map((car) => (car.id === payload.id ? payload : car)),
      };

    case DELETE_CARS:
      return {
        ...state,
        cars: state.cars.filter((item) => item.id !== payload),
      };

    case SET_CARS:
      return {
        loaded: true,
        cars: payload,
      };
    case GET_CARS:
      return state;

    default:
      return state;
  }
};

export default CarReducer;
