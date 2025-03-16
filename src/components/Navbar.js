import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container">
        <h1>FIGHT CANCER</h1>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Learn</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
