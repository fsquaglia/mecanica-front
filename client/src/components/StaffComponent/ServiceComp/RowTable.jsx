import style from './Row.module.css'

const RowTable = ({data}) => {
    const {type, date_in, date_out,createdAt}= data;
  return (
    <div className={style.row}>
    <p><h4>Tipo: </h4>{type}</p>
    {/* <p><h4>Detalle: </h4>{detail}</p> */}
    <p><h4>Entró: </h4>{date_in}</p>
    <p><h4>Salió: </h4>{date_out}</p>
    <p><h4>Servicio Creado: </h4>{createdAt}</p>
    <button>Detalles del servicio</button>

    </div>
  )
}

export default RowTable