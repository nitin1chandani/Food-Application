import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./Body.css";
// import { resList } from "../constants";
import Shimmer from "./Shimmer";

const filterData = (searchText, restaurants) => {
  const filteredData = restaurants.filter((restro) => {
    return restro.data.name.toLowerCase().includes(searchText.toLowerCase());
  });
  return filteredData;
};

const Body = () => {
  const [allRests, setAllRests] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [fileterdRests, setFilteredRests] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();

      // Optional Chaining
      setAllRests(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRests(json?.data?.cards[2]?.data?.data?.cards);
    } catch (error) {
      console.log(error);
    }
  }
  if (fileterdRests?.length === 0) {
    // return <h1>No restraunts found !!</h1>;
  }
  return allRests?.length === 0 ? (
    <Shimmer />
  ) : (
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
            const data = filterData(searchText, allRests);
            // and update the state - rest
            setFilteredRests(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="list">
        {fileterdRests.map((restraunt) => (
          <Card {...restraunt.data} key={restraunt.data.id} />
        ))}
      </div>
    </>
  );
};
export default Body;
