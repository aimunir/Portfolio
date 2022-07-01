import React from "react";
import services from "../../assects/images/services-1.png";
import MobileApp from "../../assects/images/services-2.png";
import Branding from "../../assects/images/services-3.png";
import "./Services.css";

const Services = () => {
  return (
    <div className="services__container">
      <div className="services__header"> Services </div>
      <div className="my-services"> check my services</div>
      <div className="explore__all">explore all services</div>

      <div className="image__section">
        <div className="landing__page">
        <img src={services} alt="" />
        <div className="page__text">
            <h5>Landing Page Design</h5>
            <p> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>
        </div>

        <div className="mobile__app">

        <img src={MobileApp} alt="" />
        <div className="page__text">
            <h5>Mobile App Design</h5>
            <p> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>
        </div>
        <div className="branding">
        <img src={Branding} alt="" />
        <div className="page__text">
            <h5>Branding</h5>
            <p> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Services;
