import React from "react";

import s from "./ItemsList.module.scss";

import Card from "../../../common/Card";

const ItemsList = ({
  cars,
  search,
  close,
  isEdit,
  setSearch,
  onClose,
  onChangeEdit,
  onSubmitEdit,
  onDelete,
  setIsEdit,
  setEditItem,

  editItem,
}) => {
  return (
    <div className={s.rootWrapper}>
      <div className={s.searchWrapper}>
        <input
          className={s.search}
          type="text"
          placeholder="поиск по имени"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className={s.root}>
        {cars.length === 0 ? (
          <h2>Список машин пуст 🚙</h2>
        ) : (
          <div className={s.container}>
            {cars
              .filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item.name.toLowerCase().includes(search);
              })
              .map((car, key) => (
                <Card
                  key={key}
                  id={key}
                  car={car}
                  close={close}
                  isEdit={isEdit}
                  onClose={onClose}
                  onChangeEdit={onChangeEdit}
                  onSubmitEdit={onSubmitEdit}
                  onDelete={onDelete}
                  editItem={editItem}
                  setEditItem={setEditItem}
                  setIsEdit={setIsEdit}
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemsList;
