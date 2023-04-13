import React, { useState } from 'react';
import {TrabajosItems} from "../components/TrabajosItems"

import "../styles/Gallery.css"

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Modal from 'react-modal';
import { useMediaQuery } from 'react-responsive';
import { AiFillCloseCircle } from "react-icons/ai";

function Gallery() {

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const customStyles = {
  content: {
    top: isMobile ? '35%' : '54%',
    left: isMobile ? '35%' : '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    marginTop:'40px',
    height: '75vh',
    width: isMobile ? '60%' : '50%',
  },

};

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className='gallery-container' id= 'gallery'>
      <h1 className='gallery-heading' >
        Nuestros Trabajos
      </h1>
      <div className="gallery-columns">
        {TrabajosItems?.map((image, index) => (
          <div key={index} onClick={() => handleImageClick(index)}>
            <img src={image.src} alt={image.title} />
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
        contentClassName="gallery-modal">
        <div className= "gallery-carousel-close">
          <AiFillCloseCircle onClick={handleCloseModal} className= "gallery-carousel-close" />
        </div>
        <Carousel selectedItem={selectedImageIndex} showStatus={false}>
          {TrabajosItems.map((image, index) => (
            <div className='gallery-carousel' key={index}>
              <img src={image.src} alt={image.title} />
              <p>{image.title}</p>
            </div>
          ))}
        </Carousel>
      </Modal>


		</div>
  )
}

export default Gallery
