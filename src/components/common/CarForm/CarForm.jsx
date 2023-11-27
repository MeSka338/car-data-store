import React from "react";

import { body, colors } from "@/constants/car";

import s from "./CarForm.module.scss";
import clsx from "clsx";
import CloseIcon from "@/components/icons/Close";

const CarForm = React.memo(
  ({ HandleSubmit, HandleChange, isFormOpen, newItem, setIsFormOpen }) => {
    return (
      <div className={s.form_container}>
        <form className={s.form} onSubmit={HandleSubmit}>
          <button
            className={clsx(s.closeBtn, s.btn)}
            type="button"
            onClick={() => setIsFormOpen(!isFormOpen)}
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
                onChange={HandleChange}
              ></input>
            </div>
            <div className={s.formItem}>
              <label className={s.inputTitle}>кузов</label>
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
            <div className={s.formItem}>
              <label className={s.inputTitle}>год выпуска</label>
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
            <div className={s.formItem}>
              <label className={s.inputTitle}>цвет</label>
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
            <div className={s.formItem}>
              <label className={s.inputTitle}>цена</label>
              <input
                className={s.input}
                required
                onChange={HandleChange}
                name="price"
              ></input>
            </div>
            <div className={s.formItem}>
              <label className={s.inputTitle}>лошадиные силы</label>
              <input
                className={s.input}
                required
                onChange={HandleChange}
                name="hp"
              ></input>
            </div>
            <div className={s.formItem}>
              <label className={s.inputTitle}>Обьем двигателя</label>
              <input
                className={s.input}
                required
                onChange={HandleChange}
                name="eng"
              ></input>
            </div>
            <div className={s.formItem}>
              <label className={s.inputTitle}>страна</label>
              <input
                className={s.input}
                required
                onChange={HandleChange}
                name="country"
              ></input>
            </div>
            <div className={s.formItem}>
              <label className={s.inputTitle}>описание</label>
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
  }
);

export default CarForm;
