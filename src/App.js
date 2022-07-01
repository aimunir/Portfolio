import React from "react";
import About from "./Components/About/About";
import Body from "./Components/Body/Body";
import CaseStudy from "./Components/CaseStudy/CaseStudy";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Nav";
import Portfolio from "./Components/Portfolio/Portfolio";
import Services from "./Components/Services/Services";

const App = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <Body />
        <About/>
        <Services/>
        <CaseStudy/>
        <Portfolio/>
        <Footer/>
      </div>
    </>
  );
};

export default App;
