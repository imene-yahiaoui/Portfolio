import "./style.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Collapse = (props) => {
  const [open, setOpen] = useState("none");

  return (
    <div className="collapse">
        
      <div className="collapse-title">
      <img src= {props.src}  alt={props.alt}/>
        
        <div>
          <i
            style={{ display: open }}
            className="fa-solid fa-angle-up"
            onClick={() => setOpen(open === "none" ? "block" : "none")}
          ></i>

          <i
            style={{ display: open === "none" ? "block" : "none" }}
            className="fa-solid fa-angle-down"
            onClick={() => setOpen(open === "none" ? "block" : "none")}
          ></i>
        </div>
      </div>
      <div className="collapse-article" style={{ display: open }}>
        <h6> {props.title}  </h6>
        <p>{props.text}</p>

       <Link  to="/" >
        savoir plus
       </Link>
      </div>
     
    </div>
   
  );
};

export default Collapse;