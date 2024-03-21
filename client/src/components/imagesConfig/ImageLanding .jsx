import React, { useState, useEffect } from "react";
import { imagesDB } from "../../firebase/firebaseConfig";
import { ref, listAll, getDownloadURL, uploadBytes } from "firebase/storage";

function ImageLanding() {
  const [images, setImages] = useState(Array(3).fill(null));

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const storageRef = ref(imagesDB, "principal");
        const { items } = await listAll(storageRef);
        const downloadUrls = await Promise.all(
          items.slice(0, 3).map((item) => getDownloadURL(item))
        );
        const filledImages = downloadUrls.concat(
          Array(3 - downloadUrls.length).fill(null)
        );
        setImages(filledImages);
      } catch (error) {
        console.error("Error al cargar imágenes:", error);
        // Si hay un error al cargar las imágenes, llenar el estado con valores nulos
        setImages(Array(3).fill(null));
      }
    };

    fetchImages();
  }, []);

  const handleImageClick = (index) => {
    document.getElementById(`fileInput${index}`).click();
  };

  const handleFileChange = async (index, e) => {
    try {
      const file = e.target.files[0];
      // Verificar si se selecciona un archivo
      if (!file) {
        alert("No se seleccionó ningún archivo.");
        console.error("No se seleccionó ningún archivo.");
        return;
      }

      // Verificar si la extensión del archivo es válida
      const validExtensions = ["jpg", "jpeg", "png"];
      const extension = file.name.split(".").pop().toLowerCase();
      if (
        !validExtensions.includes(extension) ||
        file.type.indexOf("image/") !== 0
      ) {
        console.error(
          "Extensión de archivo no válida o tipo de archivo incorrecto. Solo se permiten imágenes jpg, jpeg y png."
        );
        alert(
          "Extensión de archivo no válida o tipo de archivo incorrecto. Solo se permiten imágenes jpg, jpeg y png."
        );
        return;
      }

      const storageRef = ref(imagesDB);
      const fileRef = ref(storageRef, `principal/${file.name}`);
      await uploadBytes(fileRef, file);
      console.log(file);
      const url = await getDownloadURL(fileRef);
      console.log(url);
      const newImages = [...images];
      newImages[index] = url;
      setImages(newImages);
    } catch (error) {
      console.error("Error al subir archivo:", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <span>Imágenes Landing</span>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)", // 3 columnas con el mismo ancho
          gap: "10px",
          justifyContent: "center",
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              width: "100px",
              height: "100px",
              border: "1px solid black",
              margin: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            onClick={() => handleImageClick(index)}
          >
            {image ? (
              <img
                src={image}
                alt={`Image ${index}`}
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            ) : (
              "+"
            )}
            <input
              type="file"
              id={`fileInput${index}`}
              accept=".jpg, .jpeg, .png"
              style={{ display: "none" }}
              onChange={(e) => handleFileChange(index, e)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageLanding;
