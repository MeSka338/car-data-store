import { createSelector } from "reselect";
export const carsSelector = createSelector(
  (state) => state.Cars,
  ({ cars }) => cars
);

export const loadedSelector = createSelector(
  (state) => state.Cars,
  ({ loaded }) => loaded
);
