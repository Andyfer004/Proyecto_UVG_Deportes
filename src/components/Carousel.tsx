import { useState } from "react";
import "./Carousel.css";

function CustomCarousel() {
  const images = [
    "/img1-carousel.jpg",
    "/img2-carousel.jpg",
    "/img3-carousel.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="carousel">
      {/* Contenedor de Imágenes */}
      <div className="carousel-images-container">
        <div
          className="carousel-images"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="carousel-image"
              onClick={openModal} 
            />
          ))}
        </div>
      </div>

      {/* Botones */}
      <button className="carousel-button prev" onClick={handlePrev}>
        {"<"}
      </button>
      <button className="carousel-button next" onClick={handleNext}>
        {">"}
      </button>

      {/* Indicadores */}
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <div
            key={index}
            className={`indicator ${
              currentIndex === index ? "active" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[currentIndex]}
              alt={`Modal Slide ${currentIndex + 1}`}
              className="modal-image"
            />
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomCarousel;
