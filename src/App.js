import React from "react";
import "./styles/App.css";  // ✅ Correct import

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <InfoSection />
      <Footer />
    </div>
  );
}

export default App;
