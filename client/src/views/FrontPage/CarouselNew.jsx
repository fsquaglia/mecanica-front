import style from "./styles/CarouselNew.module.css";
import React from "react";
// import img1 from "../../assets/images/logo_ford.png";
// import img2 from "../../assets/images/logo_peugeot.png";
// import img3 from "../../assets/images/logo_renault.png";
// import img4 from "../../assets/images/logo chevrolet.png";
// import img5 from "../../assets/images/logo toyota.png";
// import img6 from "../../assets/images/logo vw.png";

function LoadingCarousel() {
  return (
    <div>
      <span>Loading Carousel</span>
    </div>
  );
}

function DivImg({ img, index }) {
  return (
    <div key={index} className={style.slide}>
      <img src={img} className={style.img} alt={`img${index}`} />
    </div>
  );
}

function CarouselNew({ images }) {
  const newImages = [...images, ...images];
  const widthSlideTrack = 250 * newImages.length;

  return (
    <div>
      <div className={style.isBody}>
        <div className={style.slider}>
          <div
            className={style.slidetrack}
            style={{ width: `${widthSlideTrack}px` }}
          >
            {newImages ? (
              newImages &&
              newImages.map((image, index) => (
                <DivImg img={image} index={index} />
              ))
            ) : (
              <LoadingCarousel />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarouselNew;
