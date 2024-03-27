import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postFav } from "../../redux/actions";
import neumatico from "../../assets/neumatico.gif";

const Consejos = () => {
  const [post, setPost] = useState([]);
  const dispatch = useDispatch();
  const postFavorites = useSelector((state) => state.postFav);

  useEffect(() => {
    dispatch(postFav());
  }, []);

  return (
    <div
      className="container justify-content-center"
      style={{ marginTop: "30px" }}
    >
      <div style={{ margin: "30px" }}>
        <h2>Ten en cuenta estos Tips</h2>
      </div>

      <div className="row align-items-center justify-content-center">
        {postFavorites && postFavorites.length ? (
          postFavorites.map((tip) => (
            <div
              className="align-items-center "
              style={{
                width: "18rem",
                filter: "drop-shadow(6px 6px 6px rgba(50, 50, 0, 0.5))",
                border: "nome !important",
                margin: "10px",
              }}
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/boscarol-f2a0a.appspot.com/o/blog%2Fcambio_aceite.jpg?alt=media&token=36529fb0-9691-4a5d-856c-e5d07720cbe3"
                className="card-img-top"
                style={{
                  margin: "10px",
                  borderRadius: "10px",
                }}
                alt="..."
              />
              <div className="card-body text-light">
                <h5 className="card-title">{tip.titlePost}</h5>
                <p className="card-text">{tip.textPost}</p>
                <a href="#" className="btn btn-primary">
                  Ver más...
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="container">
            <img src={neumatico} alt="Cargando datos ..." />
          </div>
        )}
      </div>
    </div>
  );
};

export default Consejos;
