import React, { useEffect, useState } from "react";
import { realtimeDB } from "../../firebase/firebaseConfig";
import { ref, onValue } from "firebase/database";

const Historia = () => {
  const [historyData, setHistoryData] = useState();

  useEffect(() => {
    //referencia al nodo history en la BD
    const historyRef = ref(realtimeDB, "history");

    //suscribir un observador para escuchar cambios en el nodo
    const unsubscribe = onValue(historyRef, (snapshot) => {
      const data = snapshot.val();
      setHistoryData(data);
    });

    return () => {
      unsubscribe(); //desconectar el observador cuando se desmonta el componente
    };
  }, []);

  return (
    <div>
      <h2>Historia</h2>
      {historyData && Object.keys(historyData).length > 0 ? (
        Object.keys(historyData).map((historyKey) =>
          historyData[historyKey].visible ? (
            <div key={historyKey}>
              <h2>{historyData[historyKey].title}</h2>
              <p>{historyData[historyKey].description}</p>
            </div>
          ) : null
        )
      ) : (
        <p>Cargando datos ...</p>
      )}
    </div>
  );
};

export default Historia;

/*
import React, { useEffect, useState } from "react";
import { realtimeDB } from "../../firebase/firebaseConfig";
import { ref, onValue } from "firebase/database";

const Historia = () => {
  const [historyData, setHistoryData] = useState();

  useEffect(() => {
    //referencia al nodo history en la BD
    const historyRef = ref(realtimeDB, "history");

    //suscribir un observador para escuchar cambios en el nodo
    const unsubscribe = onValue(historyRef, (snapshot) => {
      const data = snapshot.val();
      setHistoryData(data);
    });

    return () => {
      unsubscribe(); //desconectar el observador cuando se desmonta el componente
    };
  }, []);

  return (
    <div>
      <h2>Historia</h2>
      {historyData ? (
        Object.keys(historyData).map((historyKey) =>
          historyData[historyKey].visible ? (
            <h2 key={historyKey}>{historyData[historyKey].title}</h2>
            <p> {historyData[historyKey].description} </p>
          ) : null
        )
      ) : (
        <p>Cargando datos ...</p>
      )}
    </div>
  );
};

export default Historia;


import React, { useEffect, useState } from "react";
import { realtimeDB } from "../../firebase/firebaseConfig";
import { ref, onValue } from "firebase/database";

const Historia = () => {
  const [historyData, setHistoryData] = useState();

  useEffect(() => {
    //referencia al nodo history en la BD
    const historyRef = ref(realtimeDB, "history");

    //suscribir un observador para escuchar cambios en el nodo
    const unsubscribe = onValue(historyRef, (snapshot) => {
      const data = snapshot.val();
      setHistoryData(data);
    });

    return () => {
      unsubscribe(); //desconectar el observador cuando se desmonta el componente
    };
  }, []);

  return (
    <div>
      <h2>Historia</h2>
      {historyData ? (
        Object.keys(historyData).map((historyKey) => {
          historyData[historyKey].visible ? (
            <h2 key={historyKey}>{historyData[historyKey].title}</h2>
          ) : null;
        })
      ) : (
        <p>Cargando datos ...</p>
      )}
    </div>
  );
};

export default Historia;
*/
