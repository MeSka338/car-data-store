import React from "react";
import AddItem from "./AddItem/AddItem";
import ItemsList from "./ItemsList";
import s from "./HomePage.module.scss";
const HomePage = () => {
  return (
    <div className={s.root}>
      <AddItem />
      <ItemsList />
    </div>
  );
};

export default HomePage;
