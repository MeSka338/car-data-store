import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { DeleteCars, EditCars } from "@/_redux/car/selectors";

import EditCarForm from "./EditCarForm";

const EditCarFormContainer = React.memo(({ setIsEdit, car }) => {
  const [editItem, setEditItem] = useState({ ...car });
  const dispatch = useDispatch();

  const HandleChange = useCallback(
    (e) => {
      setEditItem({ ...editItem, [e.target.name]: e.target.value });
    },
    [editItem]
  );
  const HandleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(EditCars(editItem));
      setIsEdit(false);
    },
    [editItem]
  );

  const HandleDelete = useCallback(() => {
    dispatch(DeleteCars(editItem.id));
    setIsEdit(false);
  }, [editItem]);

  return (
    <EditCarForm
      setIsEdit={setIsEdit}
      HandleChange={HandleChange}
      HandleSubmit={HandleSubmit}
      HandleDelete={HandleDelete}
      editItem={editItem}
    />
  );
});

export default EditCarFormContainer;
