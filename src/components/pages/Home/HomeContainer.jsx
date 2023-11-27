`use client`;

import React, { useCallback, useEffect, useState } from "react";

import Home from "./Home";
import { useDispatch, useSelector } from "react-redux";
import {
  AddCars,
  DeleteCars,
  EditCars,
  GetCars,
  SetEdit,
} from "@/_redux/car/selectors";
const HomeContainer = () => {
  const { cars } = useSelector((store) => store.CarReducer);
  const [search, setSearch] = useState("");
  const [editItem, setEditItem] = useState();

  const [newItem, setNewItem] = useState({});
  const [close, setClose] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const [isFormOpen, setIsFormOpen] = useState(false);

  const dispatch = useDispatch();

  const HnadleClose = useCallback(() => {
    setClose((prev) => !prev);
  }, []);

  const handleSetEdit = useCallback(
    (car) => {
      dispatch(SetEdit(car));
      setEditItem(car);
    },
    [isEdit]
  );

  const HandleChangeEdit = useCallback(
    (e) => {
      setEditItem((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      console.log(editItem);

      console.log(e.target.value);
    },
    [editItem]
  );
  const HandleSubmitEdit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(EditCars(editItem));
      setIsEdit(false);
    },
    [editItem]
  );

  const HandleDelete = useCallback(() => {
    dispatch(DeleteCars(editItem.id));
    setIsEdit((prev) => !prev);
  }, [editItem]);

  const HandleChangeAdd = useCallback(
    (e) => {
      setNewItem({ ...newItem, [e.target.name]: e.target.value });
    },
    [newItem]
  );
  const HandleSubmitAdd = useCallback(
    (e) => {
      e.preventDefault();

      dispatch(AddCars({ ...newItem, id: Date.now(), isEdit: false }));
      setIsFormOpen(false);
    },
    [newItem]
  );
  useEffect(() => {
    dispatch(GetCars());
    console.log(editItem);
  }, []);

  return (
    <Home
      cars={cars}
      search={search}
      close={close}
      isEdit={isEdit}
      setSearch={setSearch}
      onClose={HnadleClose}
      setIsEdit={setIsEdit}
      onChangeEdit={HandleChangeEdit}
      onSubmitEdit={HandleSubmitEdit}
      onDelete={HandleDelete}
      editItem={editItem}
      setEditItem={setEditItem}
      onSetEdit={handleSetEdit}
      onChangeAdd={HandleChangeAdd}
      onSubmitAdd={HandleSubmitAdd}
      isFormOpen={isFormOpen}
      setIsFormOpen={setIsFormOpen}
    />
  );
};

export default HomeContainer;
