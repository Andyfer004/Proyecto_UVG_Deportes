import { useState } from "react";

function CustomCarousel() {
  const images = [
    "/img1-carousel.jpg", 
    "/img2-carousel.jpg", 
    "/img3-carousel.jpg", 
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* Contenedor de Imágenes */}
      <div
        style={{
          overflow: "hidden", 
        }}
      >
        <div
          style={{
            display: "flex",
            transition: "transform 0.5s ease",
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              style={{
                minWidth: "100%",
                height: "600px",
                objectFit: "cover",
              }}
            />
          ))}
        </div>
      </div>

      {/* Botón Anterior */}
      <button
        onClick={handlePrev}
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          border: "none",
          padding: "0.5rem 1rem",
          cursor: "pointer",
          borderRadius: "4px",
          zIndex: 10,
        }}
      >
        {"<"}
      </button>

      {/* Botón Siguiente */}
      <button
        onClick={handleNext}
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          border: "none",
          padding: "0.5rem 1rem",
          cursor: "pointer",
          borderRadius: "4px",
          zIndex: 10,
        }}
      >
        {">"}
      </button>

      {/* Indicadores Fuera del Contenedor de Imágenes */}
      <div
        style={{
          position: "relative",
          top: "10px", 
          display: "flex",
          justifyContent: "center",
          gap: "0.5rem",
          marginTop: "10px",
        }}
      >
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: currentIndex === index ? "#018E38" : "#018E3850",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default CustomCarousel;
