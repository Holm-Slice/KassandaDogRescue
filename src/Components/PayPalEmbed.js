// src/components/PayPalEmbed.js
import React from "react";
import "./PayPalEmbed.css";

const PayPalEmbed = () => (
  <div className="paypal-embed">
    <h2>Support Us</h2>
    <div>
      <form action="https://www.paypal.com/donate" method="post" target="_top">
        <input
          type="hidden"
          name="hosted_button_id"
          value="YOUR_PAYPAL_BUTTON_ID"
        />
        <input
          type="image"
          src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
          border="0"
          name="submit"
          title="PayPal - The safer, easier way to pay online!"
          alt="Donate with PayPal button"
        />
        <img
          alt=""
          border="0"
          src="https://www.paypal.com/en_US/i/scr/pixel.gif"
          width="1"
          height="1"
        />
      </form>
    </div>
  </div>
);

export default PayPalEmbed;
