// src/App.js
import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import NavBar from "./Components/NavBar";
import ImageCarousel from "./Components/ImageCarousel";
import PayPalEmbed from "./Components/PayPalEmbed";
import "./App.css";

const App = () => (
  <div>
    <NavBar />
    <div className="hero-image">
      <div className="hero-text">
        {/* <h1>Dog Rescue</h1> */}
        <h2>
          In Uganda, where dogs are often cast aside and their lives dismissed,
          a young man named Kirabira Gerald took a stand to change the status
          quo. Gerald saw something a lot of people that day passed by: a dog
          abandoned, hungry, and desperate for kindness, crying from a rubbish
          pit. In that moment, his heart opened, and he knew he had to do
          something—he took the dog home, named her Tobby, and cared for her as
          his own.<br></br> <br></br> But the story didn’t end with Tobby.
          Gerald saw countless other dogs suffering, neglected, and starving on
          the streets, so he appealed to his community, built a shelter from
          almost nothing, and began rescuing as many as he could. Today, he’s
          caring for 35 dogs on his own—giving them a chance at a life they
          would never otherwise have. But he’s just one person, and his
          resources are stretched thin.
          <br></br>
          <br></br> Gerald is asking for your help, not just to keep the shelter
          going but to reach even more animals left to fend for themselves.
          Every dollar counts in this fight to provide food, shelter, and love
          to dogs who have never known any of these. Help Gerald be the voice
          for Uganda’s forgotten dogs. Please, join him. Donate now to support
          this life-saving mission.
        </h2>
      </div>
      <div className="container">
        <div className="carousel-container">
          <ImageCarousel />
        </div>
        <div className="paypal-container">
          <PayPalEmbed />
        </div>
        <h2>Connect with us:</h2>
        <div className="connect-container">
          <a
            href="https://www.instagram.com/kassanda_animal_shelter/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              size={60}
              style={{
                color: "#d00000",
                marginRight: "15px",
                marginBottom: "25px",
                paddingLeft: "15px",
              }}
            />
          </a>
          <a
            href="https://wa.me/+256767020284"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp
              size={60}
              style={{
                color: "#d00000",
                marginRight: "15px",
                marginBottom: "25px",
                paddingLeft: "15px",
              }}
            />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default App;
