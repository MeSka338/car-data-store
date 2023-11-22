import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from "react";

import Head from "next/head";
import Scene from "@/components/common/Scene";
import { useSelector, useDispatch } from "react-redux";
import s from "./Car.module.scss";
import { GetCars } from "@/_redux/car/selectors";
import { useRouter } from "next/router";
import Link from "next/link";
import gsap from "gsap";
import CloseIcon from "@/components/icons/Close";

const Car = () => {
  const index = useRouter().query.index;
  const { cars, loaded } = useSelector((store) => store.CarReducer);
  const descriptionRef = useRef();
  // let car = useMemo(() => cars.find((item) => item.id === Number(index)), []);
  let car = cars.find((item) => item.id === Number(index));

  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    gsap.fromTo(
      descriptionRef.current,
      {
        x: 1000,
      },
      {
        opacity: 1,
        x: 0,
      }
    );
  }, []);

  const handleClose = useCallback(() => {
    gsap.fromTo(
      descriptionRef.current,
      {
        x: 0,
      },
      {
        opacity: 0,
        x: 1000,
      }
    );
  }, []);

  useEffect(() => {
    dispatch(GetCars());
  }, []);

  if (loaded === false) {
    return <div>loading</div>;
  }

  return (
    <>
      <Head>
        {car === undefined ? (
          <title>not found</title>
        ) : (
          <title>{car.name}</title>
        )}
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={s.root}>
        <div className={s.sceneWrapper}>
          {car === undefined ? (
            <h1>404</h1>
          ) : (
            <>
              <div className={s.header}>
                <Link href={"/"}> HOME</Link>
                <button onClick={handleClick}>INFO</button>
              </div>
              <h1 className={s.title}>{car.name}</h1>
              <div className={s.description}>
                <div className={s.descriptionWrapper} ref={descriptionRef}>
                  <div className={s.close} onClick={handleClose}>
                    <CloseIcon />
                  </div>
                  <div className={s.descriptionItem}>
                    <p className={s.descriptionItemTitle}> Цена: </p>
                    <p>{car.price} руб</p>
                  </div>
                  <div className={s.descriptionItem}>
                    <p className={s.descriptionItemTitle}> Цвет: </p>
                    <p> {car.color} </p>
                  </div>

                  <div className={s.descriptionItem}>
                    <p className={s.descriptionItemTitle}> Год выпуска: </p>
                    <p>{car.year} </p>
                  </div>

                  <div className={s.descriptionItem}>
                    <p className={s.descriptionItemTitle}> Страна: </p>
                    <p> {car.country} </p>
                  </div>

                  <div className={s.descriptionItem}>
                    <p className={s.descriptionItemTitle}> Кузов: </p>
                    <p> {car.body} </p>
                  </div>

                  <div className={s.descriptionItem}>
                    <p className={s.descriptionItemTitle}>Лошадиные силы:</p>
                    <p> {car.hp} </p>
                  </div>

                  <div className={s.descriptionItem}>
                    <p className={s.descriptionItemTitle}>Обьем двигателя:</p>
                    <p> {car.eng}</p>
                  </div>

                  <div className={s.descriptionItem}>
                    <p className={s.descriptionItemTitle}> Описание: </p>
                    <div>{car.description}</div>
                  </div>
                </div>
              </div>
              <div className={s.scene}>
                <Scene color={car.color} orbit={true} />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Car;
