import "./style.css";
import Intro from "../intro"
import logointro from "../../assets/images/photographe-portrait-tullins-grenoble-022_bigthumb.jpg"
import { useTranslation } from "react-i18next";
import Particle from "../../helpers/Particle";
import useMediaQuery from "../../helpers/MediaQuery";
const Accueil = () => {
  const { t } = useTranslation();
  const lang = localStorage.getItem("i18nextLng");
  const matches = useMediaQuery("(max-width:767px)");
  return(
    <div>
      {!matches ? 
<div className="particles-container">
      <Particle/>
      </div>
:  null
}
<div style={{ flexDirection: lang === "ar" ? "row-reverse" : "row" }} className="container accueil  ">
 
   
<Intro/>
 
<div className="container_logo">
<img  src={logointro} alt={t("logo_alt")}></img>
</div>
</div>
</div>
  ) 
};

export default Accueil;
