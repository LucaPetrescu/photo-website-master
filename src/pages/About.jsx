import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import nikond750 from "../assets/nikond750.png";
import tamron2470mm from "../assets/tamron2470mm.png";
import nikon50mm from "../assets/nikon50mm.png";
import tamron70300mm from "../assets/tamron70300mm.png";
import me from "../assets/me.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="main">
      <Navbar />
      <div className="container">
        <h1>I am a full-time software engineer and part-time photograhper</h1>
        <p className="presentation">
          Hi! I'm Luca Petrescu. I love photography as much as I love writing
          code. Even this website is developed by me!
        </p>
        <div className="me-container">
          <img src={me}></img>
          <p>
            This is me right here!
            <br />
            <br />
            As the title suggests, I work as a software engineer as my daytime
            job. But during weekends, I go on "shooting sprees" with my camera.
            I really enjoy doing this and if you want a collab with me, trust
            me, you won't regret it. Not convinced on that one? Go check out the
            gallery
          </p>
        </div>
        <br></br>
        <h2>Gear I use</h2>
      </div>
      <div className="images-container">
        {/* <ul className="list">
          <li className="element1">
            <img src={nikond750}></img>
            <p>fdiosuagfisd</p>
          </li>
          <li className="element2">
            <img src={tamron2470mm}></img>
            <p>dsadsa</p>
          </li>
          <li className="element3">
            <img src={nikon50mm}></img>
            <p>dsawer453434</p>
          </li>
          <li className="element4">
            <img src={tamron70300mm}></img>
            <p>test</p>
          </li>
        </ul> */}
        <div className="element1">
          <p>Nikon</p>
          <img src={nikond750}></img>
          <p className="element1-text">
            The backbone of all the shootings that I do. Even though the
            technology on this camera is 9 years old, it still
          </p>
        </div>
        <div className="element2">
          <img src={tamron2470mm}></img>
          <p className="element2-text">
            The main lens for all of my shootings. It is ideal for portraits,
            landscapes and well... basically everything
          </p>
        </div>
        <div className="element3">
          <img src={nikon50mm}></img>
          <p className="element3-text">
            The first lens that I got when I started with photography. It is one
            of the best lenses for portraits.
          </p>
        </div>
        <div className="element4">
          <img src={tamron70300mm}></img>
          <p className="element4-text">
            An excellent choice for shooting wildlife, sport competitions and
            panning photography.
          </p>
        </div>
      </div>
      <div>
        <Footer className="footer" />
      </div>
    </div>
  );
}

export default About;
