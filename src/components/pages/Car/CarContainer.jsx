import React, { useEffect, useRef, useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetCars } from "@/_redux/car/selectors";
import { useRouter } from "next/router";
import gsap from "gsap";

import Car from "./Car";

const CarContainer = () => {
  const index = useRouter().query.index;
  const { cars, loaded } = useSelector((store) => store.CarReducer);
  const descriptionRef = useRef();
  let car = useMemo(
    () => cars.find((item) => item.id === Number(index)),
    [index]
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetCars());
  }, []);
  return <Car car={car} loaded={loaded} descriptionRef={descriptionRef} />;
};

export default CarContainer;
