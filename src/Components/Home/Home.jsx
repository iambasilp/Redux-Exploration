import React, { useEffect } from "react";
import "./Home.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import hero_image from '../../assets/redux-reducer.png'
import ScrollReveal from "scrollreveal";

const Home = () => {
  useEffect(() => {
    ScrollReveal().reveal(".hero-left", {
      origin: "left",
      distance: "20px",
      duration: 1000,
      delay: 300,
      easing: "ease",
   
      
    });
    ScrollReveal().reveal(".hero-right", {
      origin: "right",
      distance: "20px",
      duration: 1000,
      delay: 300,
      easing: "ease",

    });
  }, []);

  return (
    <div className="hero">
      <div className="hero-left">
      <h2>Best Redux Resources</h2>
      <div className="hero-text">
          <p >Top-notch selections</p>
          <p>for your development needs</p>
        </div>
        <div className="hero-latest-btn">
          <div>Explore Resources</div>
          <FaLongArrowAltRight className="hero-latest-btn-icon" />
        </div>
      </div>

      <div className="hero-right">
        <img src={hero_image} alt="Furniture Collection" />
      </div>
    </div>
  );
};

export default Home;
