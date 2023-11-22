import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { DeleteCars, EditCars } from "@/_redux/car/selectors";

import { body, colors } from "@/constants/car";

import s from "./EditCarForm.module.scss";
import clsx from "clsx";
import CloseIcon from "@/components/icons/Close";

const EditCarForm = React.memo(({ setIsEdit, car }) => {
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
    <div className={s.form_container}>
      <form className={s.form} onSubmit={HandleSubmit}>
        <button
          className={clsx(s.closeBtn, s.btn)}
          type="button"
          onClick={() => setIsEdit(false)}
        >
          <CloseIcon />
        </button>
        <div className={s.formItemsWrapper}>
          <div className={s.formItem}>
            <label className={s.inputTitle}>Назване</label>
            <input
              className={s.input}
              name={"name"}
              required
              value={editItem.name}
              onChange={HandleChange}
            ></input>
          </div>
          <div className={s.formItem}>
            <label className={s.inputTitle}>кузов</label>
            <select
              name="body"
              value={editItem.body}
              id="cars"
              className={s.input}
              required
              onChange={HandleChange}
            >
              <option value="DEFAULT" disabled selected hidden></option>
              {body.map((item, key) => {
                return (
                  <option value={item} key={key}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          <div className={s.formItem}>
            <label className={s.inputTitle}>год выпуска</label>
            <input
              className={s.input}
              type="number"
              onChange={HandleChange}
              name="year"
              value={editItem.year}
              required
              min={1885}
              max={2023}
            ></input>
          </div>
          <div className={s.formItem}>
            <label className={s.inputTitle}>цвет</label>
            <select
              name="color"
              value={editItem.color}
              id="colors"
              className={s.input}
              required
              onChange={HandleChange}
            >
              <option value="DEFAULT" disabled selected hidden></option>

              {colors.map((item, key) => {
                return (
                  <option value={item} key={key}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          <div className={s.formItem}>
            <label className={s.inputTitle}>цена</label>
            <input
              className={s.input}
              required
              onChange={HandleChange}
              name="price"
              value={editItem.price}
            ></input>
          </div>
          <div className={s.formItem}>
            <label className={s.inputTitle}>лошадиные силы</label>
            <input
              className={s.input}
              required
              onChange={HandleChange}
              name="hp"
              value={editItem.hp}
            ></input>
          </div>
          <div className={s.formItem}>
            <label className={s.inputTitle}>Обьем двигателя</label>
            <input
              className={s.input}
              required
              onChange={HandleChange}
              name="eng"
              value={editItem.eng}
            ></input>
          </div>
          <div className={s.formItem}>
            <label className={s.inputTitle}>страна</label>
            <input
              className={s.input}
              required
              onChange={HandleChange}
              name="country"
              value={editItem.country}
            ></input>
          </div>
          <div className={s.formItem}>
            <label className={s.inputTitle}>описание</label>
            <textarea
              className={s.input}
              required
              onChange={HandleChange}
              name="description"
              value={editItem.description}
            ></textarea>
          </div>
        </div>
        <div className={s.btn_wrapper}>
          <button className={s.subBtn} type="submit">
            Изменить
          </button>
          <button className={s.delBtn} type="button" onClick={HandleDelete}>
            Удалить
          </button>
        </div>
      </form>
    </div>
  );
});

export default EditCarForm;
