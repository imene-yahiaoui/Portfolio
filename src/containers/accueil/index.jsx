import "./style.css";
import Intro from "../intro"
import logointro from "../../assets/images/logoIntro.png"
import { useTranslation } from "react-i18next";

const Accueil = () => {
  const { t } = useTranslation();
  const lang = localStorage.getItem("i18nextLng");

  return(

<div style={{ flexDirection: lang === "ar" ? "row-reverse" : "row" }} className="container accueil">
<Intro/>
<div className="container_logo">
<img  src={logointro} alt={t("logo_alt")}></img>
</div>
</div>

  ) 
};

export default Accueil;
