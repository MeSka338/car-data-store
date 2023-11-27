import React, { useState } from "react";
import clsx from "clsx";
import CarForm from "@/components/common/CarForm/CarForm";

import s from "./AddItem.module.scss";
import AddIcon from "@/components/icons/Add";

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
          <AddIcon />
        </button>
      </div>
    </div>
  );
};

export default AddItem;
