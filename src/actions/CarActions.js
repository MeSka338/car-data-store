export const AddCarAction = (newCar) => (dispatch, getState) => {
  const {
    Car: { cars },
  } = getState();

  dispatch({
    type: "ADD_CAR",
    payload: [newCar, ...cars],
  });
  localStorage.setItem("cars", JSON.stringify([newCar, ...cars]));
};
