import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

/*
 -Header
   Logo 
   Nav Items
 -Body
    SearchBar
    RestrauntList
        RestrauntCards
            Image
            discription

 -Footer
    Links
    Copyright

*/

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
