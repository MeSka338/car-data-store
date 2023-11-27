import React, { useEffect, useRef, useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetCars } from "@/_redux/car/selectors";
import { useRouter } from "next/router";
import * as THREE from "three";
import gsap from "gsap";

import Car from "./Car";

const CarContainer = () => {
  const index = useRouter().query.index;
  const { cars, loaded } = useSelector((store) => store.CarReducer);

  const modelRef = useRef();
  const descriptionRef = useRef();
  let car = useMemo(
    () => cars.find((item) => item.id === Number(index)),
    [index]
  );

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
  return (
    <Car
      car={car}
      loaded={loaded}
      descriptionRef={descriptionRef}
      onClick={handleClick}
      onClose={handleClose}
    />
  );
};

export default CarContainer;
