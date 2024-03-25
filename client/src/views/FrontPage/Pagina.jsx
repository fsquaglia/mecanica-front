import style from "./styles/Pagina.module.css";
import Carousel from "../../components/CarouselNew/CarouselNew";
import { useEffect, useState } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { imagesDB } from "../../firebase/firebaseConfig";

const Pagina = () => {
  const [images, setImages] = useState([]);
  const [imageMain, setImageMain] = useState([]);

  useEffect(() => {
    //buscamos las imágenes del carrusel
    const fetchImages = async () => {
      try {
        const storageRef = ref(imagesDB, "carrusel");
        const { items } = await listAll(storageRef);
        const downloadUrls = await Promise.all(
          items.map(async (item) => {
            return await getDownloadURL(item);
          })
        );
        setImages(downloadUrls);
      } catch (error) {
        console.error("Colocar imagen por defecto. Error: ", error);
      }
    };

    //buscarmos la imagen de fondo principal
    const fetchImageMain = async () => {
      try {
        const storageMainRef = ref(imagesDB, "principal");
        const { items } = await listAll(storageMainRef);
        const downloadUrls = await Promise.all(
          items.map(async (item) => {
            return await getDownloadURL(item);
          })
        );
        setImageMain(downloadUrls);
      } catch (error) {
        console.error("Colocar imagen por defecto. Error: ", error);
      }
    };

    fetchImages();
    fetchImageMain();
  }, []);

  // Función para seleccionar una imagen aleatoria del array
  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * imageMain.length);
    return imageMain[randomIndex];
  };

  return (
    <div>
      <div
        className={style.pag}
        style={{ backgroundImage: `url(${getRandomImage()})` }}
      >
        {/* <img src={getRandomImage()} alt="Imagen de fondo taller Boscarol" /> */}
      </div>

      <div>
        <Carousel images={images} />
      </div>
    </div>
  );
};

export default Pagina;

/*
import style from "./styles/Pagina.module.css";
import Carousel from "../../components/CarouselNew/CarouselNew";
import { useEffect, useState } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { imagesDB } from "../../firebase/firebaseConfig";

const Pagina = () => {
  const [images, setImages] = useState([]);
  const [imageMain, setImageMain] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const storageRef = ref(imagesDB, "carrusel");
        const { items } = await listAll(storageRef);
        const downloadUrls = await Promise.all(
          items.map(async (item) => {
            return await getDownloadURL(item);
          })
        );
        setImages(downloadUrls);
      } catch (error) {
        console.error("Colocar imagen por defecto. Error: ", error);
      }
    };

    const fetchImageMain = async () => {
      try {
        const storageMainRef = ref(imagesDB, "principal");
        const { items } = await listAll(storageMainRef);
        const downloadUrls = await Promise.all(
          items.map(async (item) => {
            return await getDownloadURL(item);
          })
        );
        setImageMain(downloadUrls);
      } catch (error) {
        console.error("Colocar imagen por defecto. Error: ", error);
      }
    };
    fetchImages();
    fetchImageMain();
  }, []);

  return (
    <div>
      <div className={style.pag} style={{backgroundImage}}>

      </div>
      <div>
        <Carousel images={images} />
      </div>
    </div>
  );
};

export default Pagina;
*/
