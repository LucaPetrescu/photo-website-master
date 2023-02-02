import { ImageData } from "../../components/ImageData";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

import { useState } from "react";

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

  const handleNextPicture = () => {
    sliderNumber + 1 === photos.length
      ? setSlideNumber(0)
      : setSlideNumber(sliderNumber + 1);
  };

  const handlePrevPicture = () => {
    sliderNumber === 0
      ? setSlideNumber(photos.length - 1)
      : setSlideNumber(sliderNumber - 1);
  };

  return (
    <>
      <Navbar />
      <h1 className="title">Have a look at my work</h1>
      {openModal && (
        <div className={openModal ? "modal open" : "modal"}>
          <img src={photos[sliderNumber].img} className="modal-img" />
          <div className="d-flex justify-content-center">
            <button
              id="btn-close"
              className="btn btn-danger"
              onClick={handleCloseModal}
            >
              Close
            </button>
            <button
              id="btn-prev"
              className="btn btn-light"
              onClick={handlePrevPicture}
            >
              &#8249;
            </button>
            <button
              id="btn-next"
              className="btn btn-light"
              onClick={handleNextPicture}
            >
              &#8250;
            </button>
          </div>
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
                <img src={photo.img} className="gal-img" />
              </div>
            );
          })}
      </div>
      <Footer />
    </>
  );
}

export default Gallery;
