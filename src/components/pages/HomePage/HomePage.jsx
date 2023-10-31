import React from "react";
import AddItem from "@/components/common/AddItem/AddItem";
import s from "./HomePage.module.scss";
const HomePage = () => {
  return (
    <div className={s.root}>
      <AddItem />
    </div>
  );
};

export default HomePage;
