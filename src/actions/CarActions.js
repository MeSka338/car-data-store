export const AddCarAction = (newCar) => (dispatch, getState) => {
  const {
    Car: { cars },
  } = getState();
  dispatch({
    type: "ADD_CAR",
    payload: [...cars, { ...newCar, id: Date.now() }],
  });
  localStorage.setItem("cars", JSON.stringify([newCar, ...cars]));
};

export const EditCars = (editCar) => ({
  type: "EDIT_CARS",
  payload: editCar,
});

export const UpdateLocal = (cars) => (dispatch) => {
  dispatch({
    type: "UPDATE_LOCAL",
    payload: [...cars],
  });
};
