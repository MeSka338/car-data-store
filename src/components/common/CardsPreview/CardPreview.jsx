import React from "react";
import s from "./CardPreview.module.scss";
const CardPreview = ({ car, setClick }) => {
  return (
    <div className={s.preview}>
      <div className={s.preview_window}>
        <button
          className={s.closeBtn}
          onClick={() => {
            setClick(false);
          }}
        >
          <img src="close.svg" alt="close" />
        </button>

        <h3 className={s.name}>{car.name}</h3>
        <div className={s.previw_description}>
          <div className={s.previw_description_item}>
            <p className={s.previw_description_item_title}> Цена: </p>
            <p>{car.price} руб</p>
          </div>
          <div className={s.previw_description_item}>
            <p className={s.previw_description_item_title}> Цвет: </p>
            <p> {car.color} </p>
          </div>

          <div className={s.previw_description_item}>
            <p className={s.previw_description_item_title}> Год выпуска: </p>
            <p>{car.year} </p>
          </div>

          <div className={s.previw_description_item}>
            <p className={s.previw_description_item_title}> Страна: </p>
            <p> {car.country} </p>
          </div>

          <div className={s.previw_description_item}>
            <p className={s.previw_description_item_title}> Кузов: </p>
            <p> {car.body} </p>
          </div>

          <div className={s.previw_description_item}>
            <p className={s.previw_description_item_title}>Лошадиные силы:</p>
            <p> {car.hp} </p>
          </div>

          <div className={s.previw_description_item}>
            <p className={s.previw_description_item_title}>
              {" "}
              Обьем двигателя:{" "}
            </p>
            <p> {car.eng} </p>
          </div>

          <div className={s.previw_description_item}>
            <p className={s.previw_description_item_title}> Описание: </p>
            <div>
              {car.description.split(" ").slice(0, 20).join(" ") + "..."}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPreview;
