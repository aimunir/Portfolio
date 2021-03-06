import React from "react";
import "./Testimonials.css";
import Profile from "../../assects/images/testimonial__img.png";
import Quote__upper from "../../assects/images/quote-1.png";
import Quote__down from "../../assects/images/quote-2.png";
import Arrow__left from "../../assects/images/arrow-icon-left.png";
 import  Right__arrow from "../../assects/images/arrow-icon-right.png";
 import  Box__Color from "../../assects/images/box-color.png";

const Testimonials = () => {
  return (
    <div className="testimonials__container">
      <div className="testimonial__header"> Testimonials </div>
      <div className="testimonial__subheader">What People Says</div>
      
       

      <div className="testimonial__container__content"> 
     
       
  <div className="box__flex">
  <div className="box__color"></div>
       <div className="cube"></div>
  </div>
      
        <div className="box__shadow">
       



          <img src={Profile} alt="" />

          <div className="quote__upper">
            <img src={Quote__upper} alt="" />
          </div>
          <p className="quote__text">
            {" "}
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s
          </p>

          <div className="author__name">
            <h3>Karmani</h3>
          </div>

          <div className="author__position">
            <p className="position"> FOUNDER AND CEO OF KARMANI</p>
          </div>

          <div className="left__box">
            <div className="left__arrow"><img src={Arrow__left} alt="" /></div>
            <div className="right__arrow">  <img src={Right__arrow} alt="" /> </div>
          
          </div>

          <div className="quote__down">
            <img src={Quote__down} alt="" />
          </div>
        </div>

      
       
      </div>
      
    </div>
  );
};

export default Testimonials;
