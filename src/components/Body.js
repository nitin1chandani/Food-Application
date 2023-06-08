import React from "react";
import Card from "./Card";
import "./Body.css";
import { resList } from "../constants";
const Body = () => {
  return (
    <div className="list">
      {resList.map((restraunt) => {
        return <Card {...restraunt.data} key={restraunt.data.id} />;
      })}
    </div>
  );
};
export default Body;
