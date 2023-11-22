import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { AddCars } from "@/_redux/car/selectors";
import CarForm from "./CarForm";

const CarFormContainer = React.memo(({ isFormOpen, setIsFormOpen }) => {
  const [newItem, setNewItem] = useState({});
  const dispatch = useDispatch();

  const HandleChange = useCallback(
    (e) => {
      setNewItem({ ...newItem, [e.target.name]: e.target.value });
    },
    [newItem]
  );
  const HandleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      dispatch(AddCars({ ...newItem, id: Date.now() }));
      setIsFormOpen(false);
    },
    [newItem]
  );

  return (
    <CarForm
      HandleSubmit={HandleSubmit}
      HandleChange={HandleChange}
      setIsFormOpen={setIsFormOpen}
      isFormOpen={isFormOpen}
      newItem={newItem}
    />
  );
});

export default CarFormContainer;
