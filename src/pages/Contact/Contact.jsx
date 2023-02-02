import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import { MdAlternateEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { GrInstagram, GrFacebook } from "react-icons/gr";

function Contact() {
  return (
    <div className="main">
      <Navbar />
      <div className="contact-info">
        <div className="main-content">
          <h1>Get in touch!</h1>
          <h2>Want a collab? You can find me here!</h2>
          <div className="contact-element">
            <MdAlternateEmail size={50} />
            <p>luca6011@gmail.com</p>
          </div>
          <div className="contact-element">
            <BsTelephoneFill size={50} />
            <p>+40 725 189 163</p>
          </div>
          <div className="contact-element">
            <GrInstagram size={50} />
            <p>luca.petrescu</p>
          </div>
          <div className="contact-element">
            <GrFacebook size={50} />
            <p>Luca Petrescu</p>
          </div>
        </div>
      </div>
      <Footer className="footer" />
    </div>
  );
}

export default Contact;
