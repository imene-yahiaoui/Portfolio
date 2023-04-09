import "./style.css"

const Carrousel = ({slides}) => {
    return (
      <div className="carousel">
        <div
          className="carousel-img"
          style={{ backgroundImage: `url(${slides})` }}
        ></div>
      </div>
    );
  };
  
  export default Carrousel;