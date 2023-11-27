import React from "react";
import CardPreview from "../CardsPreview/CardPreview";
import Scene from "../Scene";
import Link from "next/link";

import clsx from "clsx";
import s from "./Card.module.scss";
import EditIcon from "@/components/icons/Edit";
import EyeIcon from "@/components/icons/Eye";
import EditCarForm from "../EditCarForm";

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
  }) => {
    return (
      <>
        {close && <CardPreview car={car} onClose={onClose} />}
        {isEdit && (
          <EditCarForm
            car={car}
            onChangeEdit={onChangeEdit}
            onSubmitEdit={onSubmitEdit}
            onDelete={onDelete}
            editItem={editItem}
            setIsEdit={setIsEdit}
            setEditItem={setEditItem}
          />
        )}
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
              <EditIcon />
            </button>
            <button className={clsx(s.showBtn, s.btn)} onClick={onClose}>
              <EyeIcon />
            </button>
          </div>
        </div>
      </>
    );
  }
);

export default Card;
