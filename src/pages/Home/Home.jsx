import React, { useState, useEffect, useRef } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import { Link } from "react-router-dom";
import HomeImg from "../../assets/HomeImg.jpg";
import AboutMeImg from "../../assets/AboutMeImg.jpg";
import GalleryImg from "../../assets/GalleryImg.jpg";
import ContactImg from "../../assets/ContactImg.jpg";

function Home() {
  const [currentText, setCurrentText] = useState("");
  const message =
    "Hello! I'm Luca. 1/4 Freelance Photographer, 3/4 Software Engineer.";
  const index = useRef(0);

  useEffect(() => {
    let timeoutId;
    if (index.current < message.length) {
      timeoutId = setTimeout(() => {
        setCurrentText((value) => value + message.charAt(index.current));
        index.current += 1;
      }, 50);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentText, message, index.current]);

  return (
    <div className="main-home">
      <Navbar />
      <div className="home">
        <div className="title">{currentText}</div>
        <div className="container-home">
          <Link to="/">
            <div className="home-img-container">
              <img className="home-img" src={HomeImg} alt="Home"></img>
              <div className="image-text">Home</div>
            </div>
          </Link>
          <Link to="/about">
            <div className="aboutme-img-container">
              <img
                className="aboutme-img"
                src={AboutMeImg}
                alt="About Me"
              ></img>
              <div className="image-text">About Me</div>
            </div>
          </Link>
          <Link to="/gallery">
            <div className="gallery-img-container">
              <img className="gallery-img" src={GalleryImg} alt="Gallery"></img>
              <div className="image-text">Gallery</div>
            </div>
          </Link>
          <Link to="/contact">
            <div className="contact-img-container">
              <img className="contact-img" src={ContactImg} alt="Contact"></img>
              <div className="image-text">Contact</div>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
