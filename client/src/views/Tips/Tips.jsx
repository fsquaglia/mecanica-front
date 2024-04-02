import React from 'react'
import style from './Tips.module.css'
import datosPrueba from './DatosPrueba'
import Cards from '../../components/cards/Cards';

function Tips() {
    const datosDePrueba = datosPrueba()
    console.log(datosDePrueba);
    return (
        <div className={style.mainDiv}>
            <div className={style.divMenuFilter}>
                <h3>Filtros y busquedas</h3>
                <h4>opciones</h4>
                <h4>opciones</h4>
                <h4>opciones</h4>
                <h4>opciones</h4>
                <h4>opciones</h4>
            </div>

            <div className={style.divCard}>
                <Cards info={datosDePrueba} />
            </div>

        </div>
    )
}

export default Tips