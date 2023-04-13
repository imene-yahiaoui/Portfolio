import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.css";
import logo from "../../assets/images/logoIntro.png";
const Carrousel = ({ slides }) => {
  return (
    // <Carousel
    //   autoPlay
    //   // inreval={6000}
    //   // infiniteloop
    //   // thumbWidth={120}
    //   // showIndicators={false}
    //   // showStatue={false}
    // >
    //   <div style={{ backgroundImage: `url(${slides})` }}></div>
    // </Carousel>
    <Carousel autoPlay 
    // inreval={6000}
    // infiniteloop
    // thumbWidth={120}
    // showIndicators={false}
    // showStatue={false}
    >
      <div>
        <img src={logo} alt="photoicon" />
     
      </div>
      <div>
        <img src={logo} alt="photoicon" />
       
      </div>
      <div>
        <img src={logo} alt="photoicon" />
    
      </div>
    </Carousel>
  );
};

export default Carrousel;
