import React, { useEffect } from "react";

import { body, colors } from "@/constants/car";

import s from "./EditCarForm.module.scss";
import clsx from "clsx";
import CloseIcon from "@/components/icons/Close";

const EditCarForm = React.memo(
  ({ car, onChangeEdit, onSubmitEdit, onDelete, editItem, onSetEdit }) => {
    return (
      <div className={s.form_container}>
        <form className={s.form} onSubmit={(e) => onSubmitEdit(e)}>
          <button
            className={clsx(s.closeBtn, s.btn)}
            type="button"
            onClick={() => onSetEdit(car)}
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
                onChange={(e) => onChangeEdit(e)}
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
                onChange={(e) => onChangeEdit(e)}
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
                onChange={(e) => onChangeEdit(e)}
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
                onChange={(e) => onChangeEdit(e)}
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
                onChange={(e) => onChangeEdit(e)}
                name="price"
                value={editItem.price}
              ></input>
            </div>
            <div className={s.formItem}>
              <label className={s.inputTitle}>лошадиные силы</label>
              <input
                className={s.input}
                required
                onChange={(e) => onChangeEdit(e)}
                name="hp"
                value={editItem.hp}
              ></input>
            </div>
            <div className={s.formItem}>
              <label className={s.inputTitle}>Обьем двигателя</label>
              <input
                className={s.input}
                required
                onChange={(e) => onChangeEdit(e)}
                name="eng"
                value={editItem.eng}
              ></input>
            </div>
            <div className={s.formItem}>
              <label className={s.inputTitle}>страна</label>
              <input
                className={s.input}
                required
                onChange={(e) => onChangeEdit(e)}
                name="country"
                value={editItem.country}
              ></input>
            </div>
            <div className={s.formItem}>
              <label className={s.inputTitle}>описание</label>
              <textarea
                className={s.input}
                required
                onChange={(e) => onChangeEdit(e)}
                name="description"
                value={editItem.description}
              ></textarea>
            </div>
          </div>
          <div className={s.btn_wrapper}>
            <button className={s.subBtn} type="submit">
              Изменить
            </button>
            <button className={s.delBtn} type="button" onClick={onDelete}>
              Удалить
            </button>
          </div>
        </form>
      </div>
    );
  }
);

export default EditCarForm;
