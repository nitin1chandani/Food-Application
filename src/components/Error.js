import React from "react";
import { useRouteError } from "react-router-dom";
import "./Error.css"; // Import the CSS file
import Header from "./Header";
import Footer from "./Footer";

const Error = () => {
  const errorResponse = useRouteError();

  return (
    <>
      <div className="error-container">
        <h1 className="error-status">Status: {errorResponse.status}</h1>
        <h1 className="error-header">Oops!</h1>
        <h2 className="error-message">Something went wrong...</h2>
        <h3>{errorResponse.data}</h3>
      </div>
    </>
  );
};

export default Error;
