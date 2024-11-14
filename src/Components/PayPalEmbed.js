import React from "react";
import "./PayPalEmbed.css";
// import paypalImage from "dog-rescue-site/src/images/paypalacct.png"; // Make sure to replace with the actual path to your image

const PayPalEmbed = () => {
  const handleDonateClick = () => {
    window.open(
      "https://paypal.me/animacar70?country.x=US&locale.x=en_US",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="paypal-embed">
      <h2>Support The Mission:</h2>
      <div onClick={handleDonateClick} className="paypal-image-container">
        <img
          src="/imgs/paypalImg.png"
          alt="Donate with PayPal"
          className="paypal-image"
        />
      </div>
    </div>
  );
};

export default PayPalEmbed;
