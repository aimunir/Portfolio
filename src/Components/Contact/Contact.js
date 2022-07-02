import React from "react";
import "./Contact.css";
import Email from "../../assects/images/email__icon.png";
import Contact__icon from "../../assects/images/contact.png";
import Mobie from "../../assects/images/mobile__icon.png";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact__container__content">
        {/* left section start */}
        <div className="contact__left__section">
          <div className="contact__upper">
            <div className="contact__header">Contact us</div>
            <div className="contact__text">
              We are committed to processing the information in order to contact
              you and talk about your project.
            </div>
          </div>
          <div className="contact__info__container">
            <div className="info__info">
              <img src={Email} alt="" />
              <p className="text__info">example@teamwebflow.com</p>
            </div>

            <div className="info__info">
              <img src={Contact__icon} alt="" />
              <p className="text__info" >
              
                4040 Lekki Summit Suite 402
                Lake Manchester City

                
              </p>
            </div>

            <div className="info__info">
              <img src={Mobie} alt="" />
              <p className="text__info">+44 123 777 5401</p>
            </div>
          </div>
        </div>
        {/* left section end */}

        {/* right section start */}
        <div className="form__right__section">
          <form action="">
            <input type="text"  className="form__padding" name="" id="" placeholder="Name*" />
            <input type="email"  className="form__padding" name="" id="" placeholder="Email*" />
            <input type="text"  className="form__padding" name="" id="" placeholder="Website*" />
            <input type="text"  className="message__form__padding"   name="" id="" placeholder="Message*" />
          </form>
          <button type="submit"> Submit</button>
        </div>
        {/* right section end */}
      </div>
    </div>
  );
};

export default Contact;
