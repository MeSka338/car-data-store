import {
  GET_CARS,
  SET_CARS,
  ADD_CARS,
  EDIT_CARS,
  SET_EDIT,
  SET_PREVIEW,
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
    case SET_EDIT:
      return {
        ...state,
        cars: state.cars.map((car) =>
          car.id === payload.id
            ? { ...payload, isEdit: !payload.isEdit }
            : { ...car, isEdit: false }
        ),
      };
    case SET_PREVIEW:
      return {
        ...state,
        cars: state.cars.map((car) =>
          car.id === payload.id
            ? { ...payload, isPreview: !payload.isPreview }
            : { ...car, isPreview: false }
        ),
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
