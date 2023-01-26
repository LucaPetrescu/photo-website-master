import NavbarHome from "../components/NavbarHome";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import MainPhoto from "../assets/MainPhoto.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="main">
      <NavbarHome />
      <div className="home">
        <div className="container">
          <img className="background-img" src={MainPhoto}></img>
          <Link to="/gallery">
            <button className="btn">Gallery</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
