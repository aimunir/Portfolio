import React from "react";
import img from "../../assects/images/pro2.png";
import exp from "../../assects/images/experience.png";
import project from "../../assects/images/project.png";
import customer_img from "../../assects/images/customer.png";
import Download__logo from "../../assects/images/Vector.png";
import "./About.css";

const About = () => {
  return (
    <div className="about__container">
      <div className="img__container">
        <img src={img} alt="" />
      </div>

      <div className="text-container">
        <p id="bit">A BIT</p>
        <p className="about__me">About Me</p>
        <p className="about__details">
          I’m a top online marketer and branding expert, I started my career by
          lauching the popular metaverse design, in just a few short years, I
          built the brand to millions of social media followers and websites
          visitors. I also created award-winning online products with millions
          of dolloars in online sales you want, you never get personalized
          experiences and they can be upwards of $1000 on hour.
        </p>

        <div className="info">
          <div className="exp">
            <img src={exp} alt="" />
            <div className="exp__text">
              <p>
                5 years+ <br />{" "}
              </p>
              <p>Experience</p>
            </div>
          </div>

          <div className="projects">
            <img src={project} alt="" />
            <div className="projects__text">
              <p>700+</p>
              <p>Projects</p>
            </div>
          </div>

          <div className="customers">
            <img src={customer_img} alt="" />
            <div className="customers__text">
              <p>24/7</p>
              <p>Customer Support</p>
            </div>
          </div>
        </div>
        <div className="about__bottom">
          <button className="btn">Hire me</button>
          <p className="download">Download Cv</p>
          <img src={Download__logo} alt="" />
          
        </div>
      </div>
    </div>
  );
};

export default About;
