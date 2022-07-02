import React from "react";
import About from "./Components/About/About";
import Body from "./Components/Body/Body";
import Bottom from "./Components/Bottom/Bottom";
import CaseStudy from "./Components/CaseStudy/CaseStudy";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Nav";
import OurClient from "./Components/OurClient/OurClient";
import Portfolio from "./Components/Portfolio/Portfolio";
import Services from "./Components/Services/Services";
import Testimonials from "./Components/Testimonials/Testimonials";

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
        <Testimonials/>
        <OurClient/>
        <Contact/>
        <Bottom/>
        <Footer/>
      </div>
    </>
  );
};

export default App;
