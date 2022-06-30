import React from "react";
import img from "../../assects/images/pro1.png"
import logo from "../../assects/images/Vector.png"
import card from "../../assects/images/card_img.png"
import "./Body.css";

const Body = () => {
  return (
    <div className="body__container">
      {/* section part-1 start */}
      <div className="text__container">
        <div className="text">
          <p id="header">Hello, I am</p> <br />
          <p className="name">caleb nyong</p> <br />
          <p id="uiux">UI/UX & Product Designer</p>
          <p className="summary">
            I’m a top online marketer and branding expert, I started my career
            by lauching the popular metaverse design, in just a few short years,
            I built the brand to millions of social media followers and websites
            visitors.
          </p>


          <div className="bottom"> 
          <button className="btn">Hire me</button>
          <p className="download">Download CV</p>
          <img src={logo} alt="" />

          </div>



        </div>

        <div className="img-container">
            <img src={img} alt="" />

        </div>


      </div>

      {/* section part-1 end */}

      {/* card section start */}
       <div className="card__container">
            <div className="card__info">
            <div className="card__img">
                <img src={card} alt="" />
            </div>

            <div className="card__name">
                <p className="user__name"> Phanny-Nigeria </p>
                <p className="date"> Sat 28 May 2022</p>
            </div>

            </div>

            <div className="card__text">
            In just a few short years, I built the brand to millions of social media followers and websites visitors.
            </div>


       </div>



      {/* card section end */}



    </div>
  );
};

export default Body;
