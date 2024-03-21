import Carousel from "../components/carousel/Carousel";
import Navbar from "../components/navbar/Navbar";
import mocks from "../../public/mocks";
import { useEffect } from "react";
import style from './styles/Landing.module.css'

const Landing = () => {
  useEffect(() => {}, []);
  return (
    <div className={style.bigDiv}>


      {/* <Carousel info={mocks}/> */}
    </div>
  );
};

export default Landing;
