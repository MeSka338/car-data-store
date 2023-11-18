const CarReducer = (state = { cars: [] }, { type, payload }) => {
  switch (type) {
    case "ADD_CAR":
      return { cars: payload };
    case "UPDATE_LOCAL":
      return { cars: payload };

    case "EDIT_CARS":
      for (let i = 0; i < state.cars.length; i++) {
        if (state.cars[i].id === payload.id) {
          state.cars[i] = payload;
        }
      }

      localStorage.setItem("cars", JSON.stringify([...state.cars]));

      return {
        ...state,
        cars: state.cars,
      };

    default:
      return state;
  }
};

export default CarReducer;
