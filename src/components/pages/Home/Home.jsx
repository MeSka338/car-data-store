import React from "react";
import AddItem from "./AddItem/AddItem";
// import ItemsListContainer from "./ItemsListContainer";
import ItemsListContainer from "./ItemsList/ItemListContainer";
import s from "./Home.module.scss";
const Home = () => {
  return (
    <div className={s.root}>
      <AddItem />
      <ItemsListContainer />
    </div>
  );
};

export default Home;
