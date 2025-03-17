import React from "react";
import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h2>Skin Cancer Prediction</h2>
          <p>
            Skin cancer prediction using CNNs utilizes advanced image analysis to classify skin lesions as benign or malignant.
          </p>
          <div className="mainButtons">
          <button className="primary" onClick={() => window.location.href="#"}>Show Model</button>
          <button className="secondary" onClick={() => window.location.href="https://www.mayoclinic.org/diseases-conditions/skin-cancer/symptoms-causes/syc-20377605"}>Read More</button>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW1JZXDB6Za32ub9XjrqPCfpseIUPfgknqzRxg_PvwB9E6CbgWb-m5_J2T1olELEqKpAc&usqp=CAU" alt="Skin Cancer" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
