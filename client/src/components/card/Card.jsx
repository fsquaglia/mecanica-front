import React from 'react'
import style from './Card.module.css'

const Card = ({ titulo, imagen, descripcion }) => {

  return (
    <div className={style.bigDiv}>
      <img className={style.img} src={imagen} alt="" />
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
    </div>
  )
}

export default Card