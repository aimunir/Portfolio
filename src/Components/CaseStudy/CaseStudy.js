import React from "react";
import Bekary from "../../assects/images/Bekary.png";
import Shoe from "../../assects/images/shoe.png";
import Clear from "../../assects/images/clearmix.png";
import "./CaseStudy.css";

const CaseStudy = () => {
  return (
    <div className="CaseStudy__container">
      <div className="case__study__header"> case study</div>
      <div className="my__case__study">My Case Studies</div>
      {/* first section start */}
      <div className="first__section">
        <div className="common__section">
          <div className="img_section">
            <img src={Bekary} alt="" />
          </div>
          <div className="bekary__text">
            <h4>01</h4>
            <p className="landing__page__heading">
              {" "}
              Bakery Landing Page Design
            </p>
            <p className="landing__page__details">
              {" "}
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p>
            <button className="details__btn"> Details</button>
          </div>
        </div>
      </div>
      {/* first section end */}

      {/* Second section start */}
      <div className="second__section">
        <div className="common__section">
          <div className="shoe__text">
            <h4>02</h4>
            <p className="landing__page__heading">
              {" "}
              Shoe Store Ecommerce Landing Page
            </p>
            <p className="landing__page__details">
              {" "}
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p>
            <button className="details__btn"> Details</button>
          </div>
          <div className="img_section">
            <img src={Shoe} alt="" />
          </div>
        </div>
      </div>
      {/* Second section end */}

      {/* third section start */}
      <div className="third__section">
        <div className="common__section">
          <div className="img_section">
            <img src={Clear} alt="" />
          </div>
          <div className="clearMix__text">
            <h4>03</h4>
            <p className="landing__page__heading">
              {" "}
              ClearMix Landing pageClearMix Landing page
            </p>
            <p className="landing__page__details">
              {" "}
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p>
            <button className="details__btn"> Details</button>
          </div>
        </div>
      </div>

      {/* third section end */}
    </div>
  );
};

export default CaseStudy;
