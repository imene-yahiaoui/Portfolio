import "./style.css";
import { useTranslation } from "react-i18next";

const Intro = () => {
  const { t } = useTranslation();


  return (
    
   <div className='intro-continer'> 

<h1> {t("main_heading.static_desc")} </h1>
<h3>{t("main_heading.dynamic_desc")}  </h3>

<div>  </div>

   </div>
  );
};

export default Intro;
