import React from "react";

const PayPalEmbed = () => {
  const buttonStyle = {
    textAlign: "center",
    border: "none",
    borderRadius: "1.5rem",
    minWidth: "11.625rem",
    padding: "0 2rem",
    height: "3.125rem",
    fontWeight: "bold",
    backgroundColor: "#FFD140",
    color: "#000000",
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
    fontSize: "1.125rem",
    lineHeight: "1.5rem",
    cursor: "pointer",
  };

  const formStyle = {
    display: "inline-grid",
    justifyItems: "center",
    alignContent: "start",
    gap: "0.5rem",
  };

  const paypalLogoStyle = {
    height: "0.875rem",
    verticalAlign: "middle",
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // height: "100vh", // Full viewport height
    // backgroundColor: "#f9f9f9", // Optional background color
  };

  return (
    <div style={containerStyle}>
      <form
        action="https://www.paypal.com/ncp/payment/MTCUVGZRV8XYQ"
        method="post"
        target="_top"
        style={formStyle}
      >
        <input style={buttonStyle} type="submit" value="Donate Now" />
        <img
          src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg"
          alt="cards"
        />
        <section>
          Powered by{" "}
          <img
            src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg"
            alt="paypal"
            style={paypalLogoStyle}
          />
        </section>
      </form>
    </div>
  );
};

export default PayPalEmbed;
