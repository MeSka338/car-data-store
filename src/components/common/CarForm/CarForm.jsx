import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddCarAction } from "@/actions/CarActions";

import s from "./CarForm.module.scss";
import clsx from "clsx";

const body = [
  "Седан",
  "Лимузин",
  "Пикап",
  "Хэтчбек",
  "Универсал",
  "Лифтбек",
  "Минивэн",
  "Купе",
  "Кабриолет",
  "Лифтбек",
  "Родстер",
  "Тарга",
];

const colors = [
  "Черный",
  "Серебро",
  "Белый",
  "Серый",
  "Синий",
  "Красный",
  "Зеленый",
  "Коричневый",
  "Бежевый",
  "Голубой",
  "Золотистый",
  "Желтый",
  "Фиолетовый",
  "Оранжквый",
  "Розовый",
];

const CarForm = ({ isFormOpen, setIsFormOpen }) => {
  const [newItem, setNewItem] = useState({});
  const dispatch = useDispatch();

  const HandleChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddCarAction(newItem));
    setIsFormOpen(false);
  };

  return (
    <div className={s.form_container}>
      <form className={s.form} onSubmit={HandleSubmit}>
        <button
          className={clsx(s.closeBtn, s.btn)}
          type="button"
          onClick={() => setIsFormOpen(!isFormOpen)}
        >
          <img src="close.svg" alt="close" />
        </button>
        <div className={s.form_items_wrapper}>
          <div className={s.form_item}>
            <label className={s.input_title}>Назване</label>
            <input
              className={s.input}
              name={"name"}
              required
              onChange={HandleChange}
            ></input>
          </div>
          <div className={s.form_item}>
            <label className={s.input_title}>кузов</label>
            <select
              name="body"
              id="cars"
              className={s.input}
              required
              onChange={HandleChange}
            >
              <option value="DEFAULT" disabled selected hidden></option>
              {body.map((item) => {
                return <option value={item}>{item}</option>;
              })}
            </select>
          </div>
          <div className={s.form_item}>
            <label className={s.input_title}>год выпуска</label>
            <input
              className={s.input}
              type="number"
              onChange={HandleChange}
              name="year"
              required
              min={1885}
              max={2023}
            ></input>
          </div>
          <div className={s.form_item}>
            <label className={s.input_title}>цвет</label>
            <select
              name="color"
              id="colors"
              className={s.input}
              required
              onChange={HandleChange}
            >
              <option value="DEFAULT" disabled selected hidden></option>

              {colors.map((item) => {
                return <option value={item}>{item}</option>;
              })}
            </select>
          </div>
          <div className={s.form_item}>
            <label className={s.input_title}>цена</label>
            <input
              className={s.input}
              required
              onChange={HandleChange}
              name="price"
            ></input>
          </div>
          <div className={s.form_item}>
            <label className={s.input_title}>лошадиные силы</label>
            <input
              className={s.input}
              required
              onChange={HandleChange}
              name="hp"
            ></input>
          </div>
          <div className={s.form_item}>
            <label className={s.input_title}>Обьем двигателя</label>
            <input
              className={s.input}
              required
              onChange={HandleChange}
              name="eng"
            ></input>
          </div>
          <div className={s.form_item}>
            <label className={s.input_title}>страна</label>
            <input
              className={s.input}
              required
              onChange={HandleChange}
              name="country"
            ></input>
          </div>
          <div className={s.form_item}>
            <label className={s.input_title}>описание</label>
            <textarea
              className={s.input}
              required
              onChange={HandleChange}
              name="description"
            ></textarea>
          </div>
        </div>
        <button className={s.subBtn} type="submit">
          Добавить
        </button>
      </form>
    </div>
  );
};

export default CarForm;
