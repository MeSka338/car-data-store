import React from "react";
import AddItem from "./AddItem/AddItem";
import ItemsList from "./ItemsList";
import s from "./Home.module.scss";
const Home = ({
  cars,
  search,
  setSearch,
  onChangeEdit,
  onSubmitEdit,
  onDelete,
  setEditItem,
  editItem,
  onSetEdit,
  onChangeAdd,
  onSubmitAdd,
  isFormOpen,
  setIsFormOpen,
  modelRef,
  modelAnimation,
  onPreview,
}) => {
  return (
    <div className={s.root}>
      <AddItem
        onChangeAdd={onChangeAdd}
        onSubmitAdd={onSubmitAdd}
        isFormOpen={isFormOpen}
        setIsFormOpen={setIsFormOpen}
      />
      <ItemsList
        cars={cars}
        search={search}
        setSearch={setSearch}
        editItem={editItem}
        setEditItem={setEditItem}
        onChangeEdit={onChangeEdit}
        onSubmitEdit={onSubmitEdit}
        onDelete={onDelete}
        onSetEdit={onSetEdit}
        onPreview={onPreview}
        modelRef={modelRef}
        modelAnimation={modelAnimation}
      />
    </div>
  );
};

export default Home;
