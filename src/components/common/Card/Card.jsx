import React, { useState } from "react";
import CardPreview from "../CardsPreview/CardPreview";
import EditCarForm from "../EditCarForm/EditCarForm";
import Scene from "../Scene";
import Link from "next/link";

import clsx from "clsx";
import s from "./Card.module.scss";

const Card = React.memo(({ car }) => {
  const [click, setClick] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const HnadleClick = () => {
    setClick((prev) => !prev);
  };
  return (
    <>
      {click && <CardPreview car={car} setClick={setClick} />}
      {isEdit && <EditCarForm car={car} setIsEdit={setIsEdit} />}
      <div className={s.root}>
        <Link href={`/cars/${car.id}`} className={s.link}></Link>

        <h3 className={s.title}>{car.name}</h3>
        <div className={s.sceneWrapper}>
          <Scene color={car.color} orbit={false} />
        </div>
        <div className={s.description}>
          <div className={s.text}>
            <p className={s.textTitle}> Цена:</p>
            <p>{car.price} руб</p>
          </div>
          <div className={s.text}>
            <p className={s.textTitle}> Цвет:</p>
            <p>{car.color}</p>
          </div>
          <div className={s.text}>
            <p className={s.textTitle}> Год выпуска: </p>
            <p>{car.year}</p>
          </div>
          <div className={s.text}>
            <p className={s.textTitle}>Страна: </p>
            <p>{car.country}</p>
          </div>
        </div>
        <div className={s.btnWrapper}>
          <button
            className={clsx(s.editBtn, s.btn)}
            onClick={() => setIsEdit(true)}
          >
            <img src="edit.svg" alt="eye" />
          </button>
          <button className={clsx(s.showBtn, s.btn)} onClick={HnadleClick}>
            <img src="eye.svg" alt="eye" />
          </button>
        </div>
      </div>
    </>
  );
});

export default Card;
