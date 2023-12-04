import { createSelector } from "reselect";
export const carsSelector = createSelector(
  (state) => state.CarReducer,
  ({ cars }) => cars
);

export const loadedSelector = createSelector(
  (state) => state.CarReducer,
  ({ loaded }) => loaded
);
