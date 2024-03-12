import Car from './Car'
import GenericSearch from '../../searchComp/GenericSearch'
import style from './styles/CarGrid.module.css'
import {carByPat, getAllCars} from '../../../redux/actions'
import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'


const CarGrid = ({}) => {
 const found = useSelector((state)=>state.byPat)
 const allCars = useSelector((state)=>state.allCars)

const value=allCars;

  return (
    <div className={style.cardList}>
  
    {value && value.map((frag)=>
    <Car key={frag.id} data={frag}/>
    )}
    </div>
  )
}

export default CarGrid

