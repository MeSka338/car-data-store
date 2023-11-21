import React from "react";
import clsx from "clsx";
import Scene from "../Scene";

import s from "./CardPreview.module.scss";
import CloseIcon from "@/components/icons/Close";
const CardPreview = React.memo(({ car, setClick }) => {
  return (
    <div className={s.preview}>
      <div className={s.previewWindow}>
        <button
          className={clsx(s.closeBtn, s.btn)}
          onClick={() => {
            setClick(false);
          }}
        >
          <CloseIcon />
        </button>

        <h3 className={s.name}>{car.name}</h3>
        <div className={s.sceneWrapper}>
          <Scene color={car.color} animation={true} />
        </div>
        <div className={s.previwDescription}>
          <div className={s.previwDescriptionItem}>
            <p className={s.previwDescriptionItemTitle}> Цена: </p>
            <p>{car.price} руб</p>
          </div>
          <div className={s.previwDescriptionItem}>
            <p className={s.previwDescriptionItemTitle}> Цвет: </p>
            <p> {car.color} </p>
          </div>

          <div className={s.previwDescriptionItem}>
            <p className={s.previwDescriptionItemTitle}> Год выпуска: </p>
            <p>{car.year} </p>
          </div>

          <div className={s.previwDescriptionItem}>
            <p className={s.previwDescriptionItemTitle}> Страна: </p>
            <p> {car.country} </p>
          </div>

          <div className={s.previwDescriptionItem}>
            <p className={s.previwDescriptionItemTitle}> Кузов: </p>
            <p> {car.body} </p>
          </div>

          <div className={s.previwDescriptionItem}>
            <p className={s.previwDescriptionItemTitle}>Лошадиные силы:</p>
            <p> {car.hp} </p>
          </div>

          <div className={s.previwDescriptionItem}>
            <p className={s.previwDescriptionItemTitle}>Обьем двигателя:</p>
            <p> {car.eng}</p>
          </div>

          <div className={s.previwDescriptionItem}>
            <p className={s.previwDescriptionItemTitle}> Описание: </p>
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
