import React from "react";
import "./styles/App.css"; 

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";
import Footer from "./components/Footer";
import Login from "./components/login";
import Register from "./components/register";
// import ImageUpload from "./components/imageUpload";

function App() {
  return (
    <div>

      <Login/>
      <Register/>
      <Navbar/>
      <Hero/>
      <InfoSection/>
      <Footer/>
      
      
    </div>
  );
}

export default App;
