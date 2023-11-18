const CarReducer = (state = { cars: [], loaded: false }, { type, payload }) => {
  switch (type) {
    case "ADD_CARS":
      return {
        ...state,

        cars: [...state.cars, payload],
      };

    case "EDIT_CARS":
      for (let i = 0; i < state.cars.length; i++) {
        if (state.cars[i].id === payload.id) {
          state.cars[i] = payload;
        }
      }
      return {
        ...state,
        cars: state.cars,
      };

    case "DELETE_CARS":
      return {
        ...state,
        cars: state.cars.filter((item) => item.id !== payload),
      };

    case "SET_CARS":
      return {
        loaded: true,
        cars: payload,
      };
    case "GET_CARS":
      return state;

    default:
      return state;
  }
};

export default CarReducer;
