import Car from './Car'
import style from './styles/CarGrid.module.css'
import CarSearch from './searchCarComp/CarSearch'
import {carByPat, getAllCars} from '../../../redux/actions'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'


const CarGrid = ({}) => {
  const dispatch = useDispatch();
  const {name}=useParams();
  
 const found = useSelector((state)=>state.byPat)
 const allCars = useSelector((state)=>state.allCars)
 useEffect(()=>{
  if(name){
    dispatch(carByPat(name))
  }else{
    dispatch(getAllCars())
  }
 },[dispatch, name])

 const handleCarSearch = (searchTerm) => {
  dispatch(carByPat(searchTerm));
};
  return (
    <div className={style.cardList}>
      {/* <CarSearch  direction={'admin'} place={'patente...'} searcher={handleCarSearch}/> */}
    {name? (
      <Car key={found.id} data={found}/>
    ) :(allCars&& allCars.map((frag)=>
    <Car key={frag.id} data={frag}/>
    ))}
    </div>
  )
}

export default CarGrid

