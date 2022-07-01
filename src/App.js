import React from "react";
import About from "./Components/About/About";
import Body from "./Components/Body/Body";
import Navbar from "./Components/Navbar/Nav";
import Services from "./Components/Services/Services";

const App = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <Body />
        <About/>
        <Services/>
      </div>
    </>
  );
};

export default App;
