import React from "react";
import "./Card.css";
import { IMG_CDN_URL } from "../constants.js";
const Card = ({ name, cuisines, cloudinaryImageId, lastMileTravelString }) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="restraunt" />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString} minutes</h4>
    </div>
  );
};
export default Card;
