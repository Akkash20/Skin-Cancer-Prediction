import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="container">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Learn</a></li>
          <li><a href="#">Help</a></li>
          <li><a href="#">FAQs</a></li>
          <li><a href="#">About</a></li>
        </ul>
        <p>© Bio Project</p>
      </div>
    </footer>
  );
}

export default Footer;
