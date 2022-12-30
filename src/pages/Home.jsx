import NavbarHome from "../components/NavbarHome";
import {Link} from 'react-router-dom';
import MainPhoto from "../assets/MainPhoto.jpg";
import "../styles/Welcome.css";
import "../styles/Home.css";
import "../styles/ButtonGrid.css";
function Home() {
  return (
    <>
      <div className="home">
        <NavbarHome />
        <div className="container">
          <img className="background-img" src={MainPhoto}>
          </img>
          <Link to="/gallery">
            <button className="btn">Gallery</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
