import React, { useState } from "react";
import Card from "./Card";
import "./Body.css";
import { resList } from "../constants";

const filterData = (text, restaurants) => {
  const filteredData = resList.filter((restro) => {
    return restro.data.name.toLowerCase().includes(text.toLowerCase());
  });
  return filteredData;
};

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);
  const [rests, setRest] = useState(resList);
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
        />
        <button
          className="search-btn"
          onClick={() => {
            // filtering the data
            const data = filterData(searchText, rests);
            // and update the state - rest
            setRest(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="list">
        {rests.map((restraunt) => {
          return <Card {...restraunt.data} key={restraunt.data.id} />;
        })}
      </div>
    </>
  );
};
export default Body;
