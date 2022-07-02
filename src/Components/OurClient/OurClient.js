import React from "react";
import "./OUrClient.css";
import Slack from "../../assects/images/slack.png";
import Dropbox from "../../assects/images/dropbox.png";
import Dropbox__text from "../../assects/images/dropbox__text.png";
import Google from "../../assects/images/google.png";
import Tesla from "../../assects/images/tesla_logo.png";
import Tesla__text from "../../assects/images/tesla__text.png";


const OurClient = () => {
  return (
    <div className="client__container">
      <div className="client__header">OUR CLIENTS</div>
      <div className="client__subheader">Who Makes Me Proud</div>
      <div className="client__image__container">
        <div className="slack">
          <img src={Slack} alt="" />
        </div>
        <div className="dropbox">
          <div className="dropbox__logo">
            <img src={Dropbox} alt="" />
          </div>
          <div className="dropbox__text">
            <img src={Dropbox__text} alt="" />
          </div>
        </div>
        <div className="google">
            <img src={Google} alt="" />
        </div>
        <div className="tesla">
            <div className="tesla__logo">
                <img src={Tesla} alt="" />
            </div>
            <div className="tesla__text">
                <img src={Tesla__text} alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default OurClient;
