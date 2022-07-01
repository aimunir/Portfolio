import React from "react";
import Portfolio_1 from "../../assects/images/p-1.png";
import Portfolio_2 from "../../assects/images/p-2.png";
import Portfolio_3 from "../../assects/images/p-3.png";
import Portfolio_4 from "../../assects/images/p-4.png";
import "./Portfolio.css";

const Portfoli = () => {
  return (
    <div className="portfolio__container">
      <div className="portfolio__header">PORTFOLIO</div>
      <div className="portfolio__subheader">People Lie Work Don’t</div>

    <div className="explore__and__image__container">
      <div className="explore__all">explore all services</div>
      <div className="portfolio__image__container">
        <div className="row-1">
          <img src={Portfolio_1} alt="" />
          <img src={Portfolio_2} alt="" />
        </div>
        <div className="row-2">
          <img src={Portfolio_3} alt="" />
          <img src={Portfolio_4} alt="" />
        </div>
      </div>

    </div>
      
    </div>
  );
};

export default Portfoli;
