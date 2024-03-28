import style from "./styles/Pagina.module.css";
import Carousel from "../../components/CarouselNew/CarouselNew";
import { useEffect, useState } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { imagesDB } from "../../firebase/firebaseConfig";
import baseBackGround from '../../../public/baseBackground'

const Pagina = () => {
  const [images, setImages] = useState([]);
  const [imageMain, setImageMain] = useState([]);
  const [loading, setLoading] = useState(true);

  //console.log(baseBackGround[0].url)
  

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
        setLoading(false);
      } catch (error) {
        console.error("Colocar imagen por defecto. Error: ", error);
        setLoading(false);
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
 //style={{ backgroundImage: `url(${baseBackGround[0].url})` }}
  return (
    <div>
       {loading ? (
        // Muestra la imagen baseBackGround mientras se cargan las imágenes
        <div className={style.pag}  >
         <br></br>
         <br></br>
         <br></br>
         <br></br>
          <h1 className={style.loader} ></h1>
        </div>
      ) : (<>
      <div
        className={style.pag}
        style={{ backgroundImage: `url(${getRandomImage()})` }}
      >
        {/* <img src={getRandomImage()} alt="Imagen de fondo taller Boscarol" /> */}
      </div>

      <div>
        <Carousel images={images} />
      </div></>
       )}
    </div>
  );
};

export default Pagina;
