const CarReducer = (state = { cars: [] }, action) => {
  switch (action.type) {
    case "ADD_CAR":
      return { cars: action.payload };

    default:
      return state;
  }
};

export default CarReducer;
