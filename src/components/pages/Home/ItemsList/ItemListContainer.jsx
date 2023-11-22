import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ItemsList from "./ItemsList";

import { GetCars } from "@/_redux/car/selectors";

const ItemsListContainer = () => {
  const { cars } = useSelector((store) => store.CarReducer);
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetCars());
  }, []);
  return <ItemsList cars={cars} search={search} setSearch={setSearch} />;
};

export default ItemsListContainer;
