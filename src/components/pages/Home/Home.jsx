import React from "react";
import AddItem from "./AddItem/AddItem";
import ItemsList from "./ItemsList";
import s from "./Home.module.scss";
const Home = () => {
  return (
    <div className={s.root}>
      <AddItem />
      <ItemsList />
    </div>
  );
};

export default Home;
