import React from "react";
import "../styles/InfoSection.css";

function InfoSection() {
  return (
    <section className="info">
      <div className="container">
        <h2>More About the Model</h2>
        <div className="info-cards">
          <div className="card">
            <h3>Kaggle</h3>
            <p>Explore datasets and competitions for machine learning and AI development.</p>
            <a href="https://www.kaggle.com/" className="btn">Dataset</a>
          </div>
          <div className="card">
            <h3>CNN</h3>
            <p>Learn how Convolutional Neural Networks (CNNs) improve skin cancer detection accuracy.</p>
            <a href="https://www.geeksforgeeks.org/introduction-convolution-neural-network/" className="btn">About CNN</a>
          </div>
          <div className="card">
            <h3>Documentation</h3>
            <p>Read the documentation about how CNN models are used for skin cancer prediction.</p>
            <a href="#" className="btn">Documentation</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
