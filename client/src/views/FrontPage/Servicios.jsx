import React, { useEffect, useState } from "react";
import { realtimeDB } from "../../firebase/firebaseConfig";
import { ref, onValue } from "firebase/database";

const Servicios = () => {
  const [servicesData, setServicesData] = useState(null);

  useEffect(() => {
    // Referencia al nodo 'services' en la base de datos
    const servicesRef = ref(realtimeDB, "services");

    // Suscribe un observador para escuchar cambios en 'services'
    const unsubscribe = onValue(servicesRef, (snapshot) => {
      const data = snapshot.val();
      setServicesData(data);
    });

    // Función de limpieza al desmontar el componente
    return () => {
      unsubscribe(); // Desconecta el observador cuando el componente se desmonta
    };
  }, []); // Ejecuta el efecto solo una vez al montar el componente

  return (
    <div>
      <h2>Servicios</h2>
      {servicesData ? (
        <ul>
          {Object.keys(servicesData).map((serviceKey) => (
            <li key={serviceKey}>
              <h3>{servicesData[serviceKey].title}</h3>
              <p>{servicesData[serviceKey].description}</p>
              <p>url img: {servicesData[serviceKey].url}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
};

export default Servicios;
