import React from "react";
import About from "./Components/About/About";
import Body from "./Components/Body/Body";
import Navbar from "./Components/Navbar/Nav";

const App = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <Body />
        <About/>
      </div>
    </>
  );
};

export default App;
