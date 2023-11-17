import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import s from "./ItemsList.module.scss";

import Card from "../../../common/Card";
import { UpdateLocal } from "@/actions/CarActions";

const ItemsList = () => {
  const { cars } = useSelector((store) => store.Car);
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("cars")) {
      dispatch(UpdateLocal(JSON.parse(localStorage.getItem("cars"))));
    }
  }, []);
  return (
    <div className={s.root}>
      {cars.length === 0 ? (
        <h2>Список машин пуст 🚙</h2>
      ) : (
        <div className={s.container}>
          {cars.map((car, key) => (
            <Card key={key} id={key} car={car} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemsList;
