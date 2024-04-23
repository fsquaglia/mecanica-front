import React, { useEffect } from "react";

const CarouselComponent = () => {
  useEffect(() => {
    // Inicializar el carrusel al cargar el componente
    const carousel = document.querySelector(".carousel");
    new bootstrap.Carousel(carousel, {
      interval: 2000, // Avanzar cada 2 segundos
      wrap: true, // Repetir al llegar al final
    });
  }, []);

  // Array de colores de fondo para representar las imágenes
  const colors = [
    "#FF5733",
    "#33FF5B",
    "#335BFF",
    "#FF33E9",
    "#FFE333",
    "#33FFE3",
    "#333333",
    "#777777",
    "#CCCCCC",
    "#FFFFFF",
  ];

  return (
    <div
      id="carouselExample"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {[...Array(13)].map((_, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <div className="container">
              <div className="row">
                {colors.slice(index, index + 4).map((color, i) => (
                  <div key={i} className="col-sm-3">
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{ background: color, height: "200px" }}
                    >
                      <h1>{index + i + 1}</h1>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselComponent;
