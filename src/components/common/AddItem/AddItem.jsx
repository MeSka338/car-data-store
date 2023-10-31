import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddCarAction } from "@/actions/CarActions";

import s from "./AddItem.module.scss";

const AddItem = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newItem, setNewItem] = useState({});
  const dispatch = useDispatch();

  const HandleChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };
  const HandleSubmit = (e) => {
    dispatch(AddCarAction(newItem));
  };

  return (
    <div className={s.root}>
      {isFormOpen && (
        <div className={s.form_container}>
          <form className={s.form} onSubmit={HandleSubmit}>
            <button
              className={s.closeBtn}
              type="button"
              onClick={() => setIsFormOpen(!isFormOpen)}
            >
              close
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
                  <option value="Седан">Седан</option>
                  <option value="Лимузин">Лимузин</option>
                  <option value="Пикап">Пикап</option>
                  <option value="Хэтчбек">Хэтчбек</option>
                  <option value="Универсал">Универсал</option>
                  <option value="Лифтбек">Лифтбек</option>
                  <option value="Минивэн">Минивэн</option>
                  <option value="Купе">Купе</option>
                  <option value="Кабриолет">Кабриолет</option>
                  <option value="Родстер">Родстер</option>
                  <option value="Тарга">Тарга</option>
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
                  <option value="Черный">Черный</option>
                  <option value="Серебро">Серебро</option>
                  <option value="Белый">Белый</option>
                  <option value="Серый">Серый</option>
                  <option value="Синий">Синий</option>
                  <option value="Красный">Красный</option>
                  <option value="Зеленый">Зеленый</option>
                  <option value="Коричневый">Коричневый</option>
                  <option value="Бежевый">Бежевый</option>
                  <option value="Голубой">Голубой</option>
                  <option value="Золотистый">Золотистый</option>
                  <option value="Желтый">Желтый</option>
                  <option value="Фиолетовый">Фиолетовый</option>
                  <option value="Оранжквый">Оранжквый</option>
                  <option value="Розовый">Розовый</option>
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
                <label className={s.input_title}>литраж двигателя</label>
                <input
                  className={s.input}
                  required
                  onChange={HandleChange}
                  name="eng"
                ></input>
              </div>
              <div className={s.form_item}>
                <label className={s.input_title}>страна производитель</label>
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
      )}
      <h2 className={s.title}> add item</h2>
      <button className={s.addBtn} onClick={() => setIsFormOpen(!isFormOpen)}>
        <img src="/add.svg" alt="add" />
      </button>
    </div>
  );
};

export default AddItem;
