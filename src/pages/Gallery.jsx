import { ImageData } from "../components/ImageData";
import Footer from "../components/Footer";
import "../styles/Gallery.css";
import { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/Navbar.css";
import { AiOutlineClose } from "react-icons/ai";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

function Gallery() {
  const photos = ImageData;
  const [sliderNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Navbar />
      <h1 className="title">Have a look at my work</h1>
      {openModal && (
        <div className={openModal ? "modal open" : "modal"}>
          <div class="d-flex justify-content-center">
            <button
              id="btn-close"
              class="btn btn-danger"
              onClick={handleCloseModal}
            >
              Close{" "}
            </button>
            <button id="btn-prev">prev</button>
            <button id="btn-next">next</button>
          </div>

          <img src={photos[sliderNumber].img} alt=""></img>
        </div>
      )}

      <div className="gal">
        {photos &&
          photos.map((photo, index) => {
            return (
              <div
                className="pics"
                key={index}
                onClick={() => handleOpenModal(index)}
              >
                <img src={photo.img} />
              </div>
            );
          })}
      </div>
      <Footer />
    </>
  );
}

export default Gallery;
