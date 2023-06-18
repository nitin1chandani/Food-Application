import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

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
      <Body />
      <Footer />
    </>
  );
};

export default App;
