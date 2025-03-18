import React from "react";
import "../styles/login.css";

const Login = () => {
  return (
    <div className="login-container">
      <h1 className="title">Skin Cancer Prediction</h1>
        <div className="smallCointainer">
          <div className="left-section">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Enter your password" />
            </div>
            <button className="login-btn">Log in</button>
            <p className="register-text">
              Don't have an account? <span className="register-link">Register</span>
            </p>
          </div>
          <div className="right-section">
            <img src="https://via.placeholder.com/400" alt="Medical Illustration" className="illustration" />
          </div>
        </div>    
    </div>
  );
}

export default Login;
