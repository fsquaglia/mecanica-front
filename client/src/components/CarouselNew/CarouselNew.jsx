import React, { useEffect, useRef } from "react";
import "./CarouselNew.css"; // Estilos CSS para el carrusel

const Carousel = ({ images, intervalTime = 2000, transitionDuration = 1 }) => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      // Clonar la primera imagen y añadirla al final del carrusel
      const firstImage = carouselRef.current.firstElementChild;
      const clonedImage = firstImage.cloneNode(true);
      carouselRef.current.appendChild(clonedImage);

      // Realizar la transición suave para desplazar hacia la nueva imagen
      carouselRef.current.style.transition = `transform ${transitionDuration}s ease-out`;

      // Desplazar el carrusel hacia la siguiente imagen
      carouselRef.current.style.transform = `translateX(-${
        200 / images.length
      }%)`;

      // Esperar a que termine la transición antes de restaurar el estado original
      setTimeout(() => {
        carouselRef.current.style.transition = "none";
        carouselRef.current.style.transform = "translateX(0)";
        carouselRef.current.removeChild(firstImage);
      }, transitionDuration * 1000);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [images.length, intervalTime, transitionDuration]);

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper" ref={carouselRef}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="carousel-slide"
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
