import style from './Row.module.css'

const RowTable = ({data}) => {
    const {type, date_in, date_out,createdAt}= data;
  return (
    <div className={style.row}>
    <p><h5>Tipo: </h5>{type}</p>
    <p><h5>Entró: </h5>{date_in}</p>
    <p><h5>Salió: </h5>{date_out}</p>
    <p><h5>Servicio Creado: </h5>{createdAt}</p>
    <button>Detalles del servicio</button>

    </div>
  )
}

export default RowTable