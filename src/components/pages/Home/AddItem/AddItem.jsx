import React, { useState } from "react";
import clsx from "clsx";
import CarForm from "@/components/common/CarForm";

import s from "./AddItem.module.scss";

const AddItem = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className={s.root}>
      {isFormOpen && (
        <CarForm isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
      )}
      <div className={s.titleContainer}>
        <h2 className={s.title}>Добавить машину </h2>
        <button
          className={clsx(s.addBtn, s.btn)}
          onClick={() => setIsFormOpen(!isFormOpen)}
        >
          <img src="/add.svg" alt="add" />
        </button>
      </div>
    </div>
  );
};

export default AddItem;
