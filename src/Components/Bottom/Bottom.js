import React from "react";
import "./Bottom.css";

const Bottom = () => {
  return (
    <div className="bottom__container">
      <div className="bottom__container__content">
        {/* bottom left start */}

        <div className="left__side__container">
            <div className="bottom__header">Caleb</div>
            <div className="bottom__subtext">is simply dummy text of the printing and typesetting industry. Lorem Ipsum </div>

        </div>
        {/* bottom left end */}

        {/* bottom right start */}
        <div className="right__side__container">
            <div className="right__side__container__content">
                <div className="bottom__content__header"> 
                <h4>EXPLORE</h4>
                <h3>SUPPORTS</h3>
                <h3>ABOUT US</h3>
                <h3>BLOG</h3>
                </div>
                
                <div className="bottom__content__header"> 
                <h4>LEGAL</h4>
                <h3>TERMS OF USE</h3>
                <h3>PRIVACY POLICY</h3>
        
                </div>

                <div className="bottom__content__header"> 
                <h4>SOCIALS</h4>
                <h3>TWITTER</h3>
                <h3>LINKEDIN</h3>
                <h3>INSTAGRAM</h3>
                </div>




            </div>
        </div>
        {/* bottom right end */}
      </div>
    </div>
  );
};

export default Bottom;
