import React from "react";
import "../styles/register.css"; // Import the updated CSS

const Register = () => {
  return (
    <div className="register-container">
      <h1 className="register-title">Skin Cancer Prediction</h1>
      <div className="res-small-container">
        
        {/* Registration Form */}
        <div className="register-form">
          <h2>Register</h2>
          <p>
            Create an <span className="highlight">account</span> to access the
            features of <span className="highlight">Skin Cancer Prediction</span>
          </p>
          
          <form>
            <label htmlFor="username">Full Name</label>
            <input type="text" id="username" placeholder="Enter your full name" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />

            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" placeholder="Re-enter your password" />

            <button type="submit" className="register-button">
              Register
            </button>
          </form>
          
          <p className="login-link">
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>

        {/* Illustration Section */}
        <div className="register-illustration">
          <img
            src="https://via.placeholder.com/400" // Replace with a relevant medical/AI image
            alt="Medical AI Illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
