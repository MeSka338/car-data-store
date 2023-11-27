import React from "react";
import AddItem from "./AddItem/AddItem";
import ItemsList from "./ItemsList";
import s from "./Home.module.scss";
const Home = ({
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
  onChangeAdd,
  onSubmitAdd,
}) => {
  return (
    <div className={s.root}>
      <AddItem />
      <ItemsList
        cars={cars}
        search={search}
        close={close}
        isEdit={isEdit}
        setSearch={setSearch}
        onClose={onClose}
        editItem={editItem}
        setEditItem={setEditItem}
        setIsEdit={setIsEdit}
        onChangeEdit={onChangeEdit}
        onSubmitEdit={onSubmitEdit}
        onDelete={onDelete}
      />
    </div>
  );
};

export default Home;
