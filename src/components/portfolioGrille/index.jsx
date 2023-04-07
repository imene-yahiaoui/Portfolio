import "./style.css";
 import k from "../../assets/images/technologyIcons/sass.png"

import Collapse from "../collapse";
const PortfolioGrille = () => {
 

  
  return(
    
    <div className="PortfolioGrille" >
      <div className="PortfolioGrille_item">
    <Collapse title="test" text='blabllllllllllllllllllllllla' src={k}  key={1}/>
   
    </div>
    <div className="PortfolioGrille_item">
    <Collapse title="test" text='blabllllllllllllllllllllllla' src={k}  key={1}/>
   
    </div>
    <div className="PortfolioGrille_item">
    <Collapse title="test" text='blabllllllllllllllllllllllla' src={k}  key={1}/>
   
    </div>
    <div className="PortfolioGrille_item">
    <Collapse title="test" text='blabllllllllllllllllllllllla' src={k}  key={1}/>
   
    </div>
  </div>
  );
};

export default PortfolioGrille;
