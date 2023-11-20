import React from "react";
import clsx from "clsx";
import Scene from "../Scene";

import s from "./CardPreview.module.scss";
const CardPreview = React.memo(({ car, setClick }) => {
  return (
    <div className={s.preview}>
      <div className={s.preview_window}>
        <button
          className={clsx(s.closeBtn, s.btn)}
          onClick={() => {
            setClick(false);
          }}
        >
          <img src="close.svg" alt="close" />
        </button>

        <h3 className={s.name}>{car.name}</h3>
        <div className={s.scene_wrapper}>
          <Scene color={car.color} animation={true} />
        </div>
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
            <p className={s.previw_description_item_title}>Обьем двигателя:</p>
            <p> {car.eng}</p>
          </div>

          <div className={s.previw_description_item}>
            <p className={s.previw_description_item_title}> Описание: </p>
            <div>
              {car.description.split(" ").length < 20
                ? car.description
                : car.description.split(" ").slice(0, 20).join(" ") + "..."}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default CardPreview;
