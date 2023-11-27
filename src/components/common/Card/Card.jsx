import React, { useEffect } from "react";
import CardPreview from "../CardsPreview/CardPreview";
import Scene from "../Scene";
import Link from "next/link";

import clsx from "clsx";
import s from "./Card.module.scss";
import EditIcon from "@/components/icons/Edit";
import EyeIcon from "@/components/icons/Eye";
import EditCarForm from "../EditCarForm";
import { useDispatch } from "react-redux";
import { SetEdit, SetPreview } from "@/_redux/car/selectors";

const Card = React.memo(
  ({
    id,
    car,
    close,
    isEdit,
    onClose,
    onChangeEdit,
    onSubmitEdit,
    onDelete,
    editItem,
    setIsEdit,
    setEditItem,
    onSetEdit,
    modelRef,
    modelAnimation,
    onPreview,
  }) => {
    return (
      <>
        {car.isPreview && (
          <CardPreview
            car={car}
            onClose={onClose}
            modelRef={modelRef}
            modelAnimation={modelAnimation}
            onPreview={onPreview}
          />
        )}
        {car.isEdit && (
          <EditCarForm
            car={car}
            onChangeEdit={onChangeEdit}
            onSubmitEdit={onSubmitEdit}
            onDelete={onDelete}
            editItem={editItem}
            setIsEdit={setIsEdit}
            setEditItem={setEditItem}
            onSetEdit={onSetEdit}
          />
        )}
        <div className={s.root}>
          <Link href={`/cars/${car.id}`} className={s.link}></Link>

          <h3 className={s.title}>{car.name}</h3>
          <div className={s.sceneWrapper}>
            <Scene color={car.color} />
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
              onClick={() => onSetEdit(car)}
            >
              <EditIcon />
            </button>
            <button
              className={clsx(s.showBtn, s.btn)}
              onClick={() => onPreview(car)}
            >
              <EyeIcon />
            </button>
          </div>
        </div>
      </>
    );
  }
);

export default Card;
