import React from "react";
import "../styles/Footer.css";
import { GrInstagram, GrFacebook } from "react-icons/gr";

function Footer() {

  let d = new Date(); 
 
  let currentYear = d.getFullYear()
  return (
    // <div className="footer">
    //   <p>Follow</p>
    //   <a href="https://www.instagram.com/luca.petrescu/">
    //     <GrInstagram className="icon-instagram" size={70} />
    //   </a>
    //   <a href="https://www.facebook.com/petrescu.luca">
    //     <GrFacebook className="icon-facebook" size={70} />
    //   </a>
    //   <footer className="copyright"> © Copyright {currentYear}, Luca Petrescu</footer>
    // </div>
    <footer className="footer">
      <p>Follow</p>
       <a href="https://www.instagram.com/luca.petrescu/">
         <GrInstagram className="icon-instagram" size={70} />
       </a>
       <a href="https://www.facebook.com/petrescu.luca">
         <GrFacebook className="icon-facebook" size={70} />
       </a>
       <p className="copyright">© Copyright {currentYear}, Luca Petrescu</p>
    </footer>
  );
}

export default Footer;
