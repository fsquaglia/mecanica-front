import React, { useState } from "react";
import { imagesDB } from "../../firebase/firebaseConfig";
import GenericButton from "../GenericButton/GenericButton";
import { ref, uploadBytes } from "firebase/storage";
import ImageLanding from "./ImageLanding ";
import ImageCarrusel from "./ImageCarrusel";

function ImagesConfig() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          border: "1px solid black",
          borderRadius: "5px",
          margin: "5px",
        }}
      >
        <ImageLanding />
      </div>
      <div
        style={{
          border: "1px solid black",
          borderRadius: "5px",
          margin: "5px",
        }}
      >
        <ImageCarrusel />
      </div>
    </div>
  );
}

export default ImagesConfig;
