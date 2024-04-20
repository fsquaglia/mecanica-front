import React, { useEffect } from 'react'
import style from './Tips.module.css'
import datosPrueba from './DatosPrueba'
import Cards from '../../components/cards/Cards';
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategoryTips, getAllTips, getOrderTips, optionFiltered, stateOrderTips } from '../../redux/actions';
import { useState } from 'react';

function Tips() {
    const dispatch = useDispatch()
    const allTips = useSelector((state) => state.allTips)
    const allCategoryTips = useSelector((state) => state.allCategoryTips)
    const variableFilter = useSelector((state) => state.variableFilter)
    const optionFilter = useSelector((state) => state.optionFilter)
    console.log(variableFilter.cat);
    useEffect(() => {
        if (allTips.length === 0) {
            dispatch(getAllTips())
        }
        if (allCategoryTips.length === 0) {
            dispatch(getAllCategoryTips())
        }

    }, [])



    const handlerSelect = (el) => {
        console.log(el.target.value);
        const { cat } = variableFilter
        if (el.target.value == "nameAsc") {
            dispatch(getOrderTips(cat, "titlePost", "Asc"))
            dispatch(stateOrderTips(cat, "titlePost", "Asc"))
            return dispatch(optionFiltered(cat, "nameAsc"))
        } else if (el.target.value == "nameDesc") {
            dispatch(getOrderTips(cat, "titlePost", "Desc"))
            dispatch(stateOrderTips(cat, "titlePost", "Desc"))
            return dispatch(optionFiltered(cat, "nameDesc"))
        } else if (el.target.value == "timeDesc") {
            dispatch(getOrderTips(cat, "createdAt", "Desc"))
            dispatch(stateOrderTips(cat, "createdAt", "Desc"))
            return dispatch(optionFiltered(cat, "timeAsc"))
        } else if (el.target.value == "timeAsc") {
            dispatch(getOrderTips(cat, "createdAt", "Asc"))
            dispatch(stateOrderTips(cat, "createdAt", "Asc"))
            return dispatch(optionFiltered(cat, "timeAsc"))
        }

        else {
            dispatch(getOrderTips(el.target.selectedIndex, variableFilter.columnorder, variableFilter.order))
            dispatch(stateOrderTips(el.target.selectedIndex, variableFilter.columnorder, variableFilter.order))
            return dispatch(optionFiltered(el.target.value, optionFilter.order))
        }

    }


    // Estado para controlar si el modal está abierto o cerrado
    const [modalOpen, setModalOpen] = useState(false);
    // Estado para almacenar la información de la tarjeta seleccionada
    const [selectedCardInfo, setSelectedCardInfo] = useState(null);

    // Función para abrir el modal y mostrar la información de la tarjeta seleccionada
    const handleCardClick = (cardInfo) => {
        console.log(cardInfo);
        setSelectedCardInfo(cardInfo);
        setModalOpen(true);
    };

    // Función para cerrar el modal
    const closeModal = () => {
        setSelectedCardInfo(null);
        setModalOpen(false);
    };


    return (
        <div className={style.mainDiv}>
            <div className={style.divHeaderImg}>
                <img className={style.headerImg} src="https://www.healeybrothers.com/content/images/comingsoon/2021FordMustangMach1/Header.jpg" alt="" />
            </div>


            <div className={style.divMenuFilter}>
                <h3 className={style.h3Title}>Filtros y busquedas</h3>
                <hr></hr>
                <div className={style.categoryDiv}>
                    <span className={style.spanTitle}>Categorias</span>
                    <select value={optionFilter.category} onChange={(el) => handlerSelect(el)} class="form-select" aria-label="Default select example" >
                        <option key={0} >Todos</option>
                        {
                            allCategoryTips && allCategoryTips.map((el) => {
                                return (<option className={style.optionText} key={el.idCategory} value={el.descCategory}> {el.descCategory}</option>)
                            })
                        }

                    </select>
                </div>
                <br></br>
                <br></br>
                <div className={style.orderDiv}>
                    <span className={style.spanTitle}>Ordenar por:</span>
                    <select value={optionFilter.order} onChange={(el) => handlerSelect(el)} class="form-select" aria-label="Default select example">
                        <option value={"nameAsc"} >A-Z</option>
                        <option value={"nameDesc"} >Z-A</option>
                        <option value={"timeDesc"} >Más Recientes</option>
                        <option value={"timeAsc"} >Más Antiguos </option>


                    </select>
                </div>
            </div>

            <div className={style.divCard}>
                <Cards info={allTips} elModal={handleCardClick} />
            </div>


            {modalOpen && (
                <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {/* Contenido del modal */}
                            {selectedCardInfo && (
                                <div className="modal-body">
                                    {/* Mostrar la información de la tarjeta seleccionada */}
                                    <h2>{selectedCardInfo.title}</h2>
                                    <p>{selectedCardInfo.description}</p>
                                </div>
                            )}
                            {/* Botón para cerrar el modal */}
                            <button type="button" className="btn btn-primary" onClick={closeModal}>Cerrar</button>
                        </div>
                    </div>
                </div>
            )}





        </div>
    )
}

export default Tips