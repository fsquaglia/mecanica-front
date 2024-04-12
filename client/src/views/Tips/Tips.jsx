import React, { useEffect } from 'react'
import style from './Tips.module.css'
import datosPrueba from './DatosPrueba'
import Cards from '../../components/cards/Cards';
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategoryTips, getAllTips } from '../../redux/actions';

function Tips() {
    const dispatch = useDispatch()
    const allTips = useSelector((state) => state.allTips)
    const allCategoryTips = useSelector((state) => state.allCategoryTips)
    useEffect(() => {
        if (allTips.length === 0) {
            dispatch(getAllTips())
        }
        if (allCategoryTips.length === 0) {
            dispatch(getAllCategoryTips())
        }
    }, [])
    console.log(allCategoryTips);
    const datosDePrueba = datosPrueba()
    return (
        <div className={style.mainDiv}>
            <div className={style.divHeaderImg}>
                <img className={style.headerImg} src="https://www.healeybrothers.com/content/images/comingsoon/2021FordMustangMach1/Header.jpg" alt="" />
            </div>


            <div className={style.divMenuFilter}>
                <h3 className={style.h3Title}>Filtros y busquedas</h3>
                <hr></hr>
                <span className={style.spanTitle}>Categorias</span>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Todos</option>
                    {
                        allCategoryTips && allCategoryTips.map((el) => {
                            console.log(el.descCategory);
                            return (<option className={style.optionText} key={el.idCategory} value={el.descCategory}> {el.descCategory}</option>)
                        })
                    }

                </select>
                <br></br>
                <br></br>
                <span className={style.spanTitle}>Ordenar por:</span>
                <select class="form-select" aria-label="Default select example">
                    <option selected>A-Z</option>
                    <option selected>Z-A</option>
                    <option selected>Más Recientes</option>
                    <option selected>Más Antiguos </option>


                </select>

            </div>

            <div className={style.divCard}>
                <Cards info={allTips} />
            </div>

        </div>
    )
}

export default Tips