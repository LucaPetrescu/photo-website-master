import { ImageData } from "../components/ImageData";
import "../styles/Gallery.css";
import {useState} from 'react';
import Navbar from "../components/Navbar";
import "../styles/Navbar.css";
import {AiOutlineClose} from 'react-icons/ai';
import {GrNext} from 'react-icons/gr';
import {GrPrevious} from 'react-icons/gr';

function Gallery() {
  const photos = ImageData;
  const [sliderNumber, setSlideNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = (index) => {
    setSlideNumber(index)
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  return (
    <>
    <Navbar/>
    
    <h1 className="title">Have a look at my work</h1>
      {
        openModal &&  <div className={openModal ? "modal open" : "modal"}>
          <AiOutlineClose onClick={handleCloseModal} className="btn-close"/>
          <GrNext className="btn-next"/>
          <GrPrevious className="btn-prev"/>
          <img src={photos[sliderNumber].img} alt=''/>
        </div>
      }
      
       
      
    
      <div className="gal">
        {photos && photos.map((photo, index) => {
          return (
            <div className="pics" key={index} onClick={()=>handleOpenModal(index)}>
              <img src={photo.img} />
            </div>
          );
        })}
    </div>
      {/* <Footer/> */}
    </>
  );
}

export default Gallery;
