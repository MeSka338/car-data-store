import React, { useCallback, useEffect, useRef, useState } from "react";

import Home from "./Home";
import { useDispatch, useSelector } from "react-redux";
import { carsSelector } from "@/_redux/cars/selectors";
import {
  AddCars,
  DeleteCars,
  EditCars,
  GetCars,
  SetEdit,
  SetPreview,
} from "@/_redux/cars/dispatchFunc";
import gsap from "gsap";
const HomeContainer = () => {
  // const state = useSelector((store) => store.Cars);
  const cars = useSelector(carsSelector);
  const [search, setSearch] = useState("");
  const [editItem, setEditItem] = useState();

  const [newItem, setNewItem] = useState({});

  const [isFormOpen, setIsFormOpen] = useState(false);

  const modelRef = useRef();

  const dispatch = useDispatch();

  const handleSetEdit = useCallback((car) => {
    dispatch(SetEdit(car));
    setEditItem(car);
  }, []);

  const handleChangeEdit = useCallback(
    (e) => {
      setEditItem((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    },
    [editItem]
  );
  const handleSubmitEdit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(EditCars(editItem));
    },
    [editItem]
  );

  const handleDelete = useCallback(() => {
    dispatch(DeleteCars(editItem.id));
  }, [editItem]);

  const handleChangeAdd = useCallback(
    (e) => {
      setNewItem({ ...newItem, [e.target.name]: e.target.value });
    },
    [newItem]
  );
  const handleSubmitAdd = useCallback(
    (e) => {
      e.preventDefault();

      dispatch(AddCars({ ...newItem, id: Date.now() }));
      setIsFormOpen(false);
    },
    [newItem]
  );

  const handlePreview = (car) => {
    dispatch(SetPreview(car));
  };

  const modelAnimation = useCallback(() => {
    gsap.from(modelRef.current.rotation, {
      ease: "power4.out",
      duration: 4,
      y: 2 * Math.PI,
    });
    gsap.from(modelRef.current.position, {
      duration: 3,
      y: -3,
      ease: "power4.out",
    });
    gsap.to(modelRef.current.scale, {
      duration: 3,
      x: 2.5,
      y: 2.5,
      z: 2.5,
      ease: "power4.out",
    });
  }, []);
  useEffect(() => {
    dispatch(GetCars());
  }, []);

  return (
    <Home
      cars={cars}
      search={search}
      setSearch={setSearch}
      onChangeEdit={handleChangeEdit}
      onSubmitEdit={handleSubmitEdit}
      onDelete={handleDelete}
      editItem={editItem}
      setEditItem={setEditItem}
      onSetEdit={handleSetEdit}
      onChangeAdd={handleChangeAdd}
      onSubmitAdd={handleSubmitAdd}
      onPreview={handlePreview}
      isFormOpen={isFormOpen}
      setIsFormOpen={setIsFormOpen}
      modelRef={modelRef}
      modelAnimation={modelAnimation}
    />
  );
};

export default HomeContainer;
