import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllTips } from "../../redux/actions";

function TipsEdit() {
  const dispatch = useDispatch();
  const allTips = useSelector((state) => state.allTips);
  const [catUniques, setCatUniques] = useState([]); //nombre de las categorías, sólo las que están presentes en allTips
  const [searchTerm, setSearchTerm] = useState(""); //estado para los términos de búsqueda, filtrado reactivo
  const [filteredTips, setFilteredTips] = useState([]); // Estado para los tips filtrados
  const [filterPublished, setFilterPublished] = useState(true);
  const [filterFavorite, setFilterFavorite] = useState(false);
  const [originalTips, setOriginalTips] = useState([]); // Estado para los tips originales

  useEffect(() => {
    dispatch(getAllTips());
    // if (allTips) {
    //   setFilteredTips(
    //     filterTips(allTips, searchTerm, filterPublished, filterFavorite)
    //   );
    //   console.log(filteredTips);
    // }
  }, []);

  useEffect(() => {
    if (allTips && allTips.length > 0) {
      const uniqueCategories = allTips
        .map((tip) => tip.CategoryPost?.descCategory)
        .filter(
          (category, index, self) =>
            category && self.indexOf(category) === index
        );

      uniqueCategories.sort();
      setCatUniques(uniqueCategories);

      // Almacenar los tips originales cuando cambia allTips
      setOriginalTips(allTips);
      // Aplicar los filtros sobre los tips originales
      setFilteredTips(
        filterTips(originalTips, searchTerm, filterPublished, filterFavorite)
      );
    }
  }, [allTips, searchTerm, filterPublished, filterFavorite]);

  const filterTips = (tips, term, published, favorite) => {
    let filtered = tips.filter((tip) =>
      tip.titlePost.toLowerCase().includes(term.toLowerCase())
    );
    if (published !== null) {
      filtered = filtered.filter((tip) => tip.published === published);
    }
    if (favorite !== null) {
      filtered = filtered.filter((tip) => tip.viewFavPost === favorite);
    }

    return filtered;
  };

  return (
    <div className="container align-items-center justify-content-center">
      <h4> Personaliza tu blog</h4>
      <div className="container w-75">
        <p>
          En esta sección podrás crear y modificar los Tips para tu blog o lista
          de consejos.
        </p>
      </div>
      <div className="d-flex flex-wrap">
        {/*barra de la IZQUIERDA */}
        <div
          className="container align-items-center col-md-3 pt-3 pb-3"
          style={{ minHeight: "200px" }}
        >
          {/* input search */}
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i class="bi bi-search"></i>
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Buscar..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </div>
          {/*Switch Publicados*/}
          <div
            class="d-flex flex-row align-items-center  form-check form-switch border rounded my-3 bg-light bg-gradient p-0"
            style={{ height: "54px" }}
          >
            <input
              class="form-check-input"
              style={{ marginLeft: "10px", marginRight: "10px" }}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              checked={filterPublished}
              onChange={(event) => setFilterPublished(event.target.checked)}
            ></input>
            <label class="form-check-label" for="flexSwitchCheckChecked">
              Publicados
            </label>
          </div>
          {/*Switch Favoritos*/}
          <div
            class="d-flex flex-row align-items-center  form-check form-switch border rounded my-3 bg-light bg-gradient p-0"
            style={{ height: "54px" }}
          >
            <input
              class="form-check-input"
              style={{ marginLeft: "10px", marginRight: "10px" }}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckFav"
              checked={filterFavorite}
              onChange={(event) => setFilterFavorite(event.target.checked)}
            ></input>
            <label class="form-check-label" for="flexSwitchCheckFav">
              Favoritos
            </label>
          </div>
          {/*Ordenamiento */}
          <div
            class="d-flex flex-column   form-check form-switch border rounded my-3 bg-light bg-gradient p-2"
            style={{ minHeight: "54px" }}
          >
            <p>Ordenamiento</p>
            <div className="d-flex flex-wrap justify-content-evenly">
              <div>
                <button class="btn btn-primary" type="button">
                  Fecha
                </button>
              </div>
              <div>
                <button class="btn btn-primary" type="button">
                  Título
                </button>
              </div>
            </div>
          </div>
          {/*Filter Categoies*/}
          <div className="d-flex flex-column text-secondary fw-normal align-items-start">
            <div className=" d-flex">
              <p>
                <b>Categorías</b>
              </p>
            </div>
            {/*Categorias map*/}
            {catUniques?.map((cat, index) => (
              <div key={index} className="d-flex ">
                <div className="form-check ">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id={"hola"}
                    checked={false}
                  ></input>
                  <label className="form-check-label" htmlFor={"hola"}>
                    {cat}
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* visualización de Card a la DERECHA*/}
        <div className="d-flex align-content-center justify-content-center flex-wrap col-md-9 gap-5 pt-3 pb-3">
          {allTips
            ? filteredTips.map((tip, index) => (
                <div
                  key={tip.idPost}
                  className="card text-secondary fw-normal shadow"
                  style={{ width: "250px" }}
                >
                  <div className="card-img-top">
                    <img
                      src={tip.imgPost[0]}
                      className="card-img-top"
                      alt={tip.titlePost}
                    />
                  </div>
                  <div className="card-body">
                    <p className="card-title">
                      <b>{tip.titlePost}</b>
                    </p>
                    <p className="card-text">
                      {tip.textPost.length > 20
                        ? `${tip.textPost.substring(0, 80)}...`
                        : tip.textPost}
                    </p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      Categoría:{" "}
                      {tip.CategoryPost ? tip.CategoryPost.descCategory : null}
                    </li>
                    <li className="list-group-item">
                      Fecha guardado/publicado <br />
                      {tip.datePost}
                    </li>
                  </ul>

                  <div className="container d-flex ps-5">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id={`flexCheckChecked${tip.idPost}`}
                        checked={tip.published}
                      ></input>
                      <label
                        className="form-check-label"
                        htmlFor={`flexCheckChecked${tip.idPost}`}
                      >
                        Publicado
                      </label>
                    </div>
                  </div>
                  <div className="container d-flex ps-5">
                    <div className="form-check ">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id={`flexCheckChecked${tip.idPost}`}
                        checked={tip.viewFavPost}
                      ></input>
                      <label
                        className="form-check-label"
                        htmlFor={`flexCheckChecked${tip.idPost}`}
                      >
                        Favorito
                      </label>
                    </div>
                  </div>
                </div>
              ))
            : null}
        </div>
        <div className="container my-3">
          {/*aquí abajo va el paginado */}
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
              <li class="page-item disabled">
                <a class="page-link">Previous</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  1
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  2
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  3
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default TipsEdit;
