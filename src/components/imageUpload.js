import React, { useState } from "react";
import "../styles/imageUpload.css";

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleClear = () => {
    setImage(null);
    setPrediction("");
  };

  const handleSubmit = () => {
    // Simulating API response
    setTimeout(() => {
      setPrediction("Predicted: Melanoma Detected"); // Replace with actual API call
    }, 1000);
  };

  return (
    <div className="upload-container">
      {/* Input Box */}
      <div className="input-box">
        {image ? (
          <img src={image} alt="Uploaded Preview" className="preview-image" />
        ) : (
          <label className="upload-label">
            <input type="file" onChange={handleImageUpload} hidden />
            <p>Drop Image Here <br /> - or - <br /> Click to Upload</p>
          </label>
        )}
      </div>

      {/* Buttons */}
      <div className="buttons">
        <button className="clear-btn" onClick={handleClear}>Clear</button>
        <button className="submit-btn" onClick={handleSubmit}>Submit</button>
      </div>

      {/* Output Box */}
      <div className="output-box">
        <p>{prediction || " "}</p>
      </div>
    </div>
  );
};

export default ImageUpload;
