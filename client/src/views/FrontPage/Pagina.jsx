import style from './styles/Pagina.module.css'
import logo from '../../../public/images/logoBoscarol.png'
import img1 from '../../../public/images/logo_ford.png'
import img2 from '../../../public/images/logo_peugeot.png'
import img3 from '../../../public/images/logo_renault.png'
import motor from '../../../public/images/motor.jpg'

const Pagina = () => {
  return (
    <div className={style.pag}>
      <div className={style.divBigImg}>
        <img className={style.imgBackground} src={motor} alt="" />
      </div>
      <div className={style.divImg}>

        <img src={logo} className={style.logoB} alt="" />
      </div>
      <div className={style.divTitulo}>
        <h1 className={style.titulo}>Boscarol Hermanos</h1>
        <h2 className={style.titulo}>Cuidando tu auto desde 1980</h2>
      </div>

      <div
        id="carouselExampleSlidesOnly"
        className={`carousel slide ${style.bigDivCarr}`}
        data-bs-ride="carousel"
        data-bs-interval="4000"
        data-bs-pause="false"
      >
        <div className={`carousel-inner ${style.secondDiv}`}>
          <div className={`carousel-item carousel-fade active ${style.items}`}>
            <img src={img1} className={`d-block w-100 carousel-fade ${style.images}`} alt="..." />
          </div>
          <div className={`carousel-item carousel-fade ${style.items}`}>
            <img src={img2} className={`d-block w-100 carousel-fade ${style.images}`} alt="..." />
          </div>
          <di className={`carousel-item carousel-fade ${style.items}`}>
            <img src={img3} className={`d-block w-100 carousel-fade ${style.images}`} alt="..." />
          </di>
        </div>
      </div>


    </div>
  )
}

export default Pagina