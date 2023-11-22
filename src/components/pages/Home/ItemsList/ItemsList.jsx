import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import s from "./ItemsList.module.scss";

import Card from "../../../common/Card";
import { GetCars } from "@/_redux/car/selectors";

const ItemsList = () => {
  const { cars } = useSelector((store) => store.CarReducer);
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetCars());
  }, []);
  return (
    <div className={s.rootWrapper}>
      <div className={s.searchWrapper}>
        <input
          className={s.search}
          type="text"
          placeholder="поиск по имени"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className={s.root}>
        {cars.length === 0 ? (
          <h2>Список машин пуст 🚙</h2>
        ) : (
          <div className={s.container}>
            {cars
              .filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item.name.toLowerCase().includes(search);
              })
              .map((car, key) => (
                <Card key={key} id={key} car={car} />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemsList;
