import Carousel from "../components/carousel/Carousel";
import Navbar from "../components/navbar/Navbar";
import mocks from "../../public/mocks";
import { useEffect } from "react";

const Landing = () => {
  useEffect(() => {}, []);
  return (
    <div>
      <Navbar />
      {/* <Carousel info={mocks}/> */}
    </div>
  );
};

export default Landing;
