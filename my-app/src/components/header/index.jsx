import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../../assets/images/logo.png";
import "./style.css";
import useMediaQuery from "../../helpers/MediaQuery";

const Header = () => {
  const matches = useMediaQuery("(max-width:767px)");
  const { i18n, t } = useTranslation();
 

 

  return (
    <div className="navbar">
      <nav className="container">
<div className="logo">
        <Link to="/">
          <img  src={logo} alt={t("logo_alt")}></img>
        </Link>
        </div>


        {!matches ?
        <div className='nav-elements'>
        <ul>
          <li>
            <Link to={t("home_path")}>{t("home_title")}</Link>
          </li>
          <li>
            <Link to={t("skills_path")}>{t("skills_title")}</Link>
          </li>
          <li>
            <Link to={t("portfolio_path")}>{t("portfolio_title")}</Link>
          </li>
          <li>
            <Link to={t("contact_path")}>{t("contact_title")}</Link>
          </li>
          <li>
            <select className="btn_lang">
              <option value="fr" onClick={() => i18n.changeLanguage("fr")}>
                {" "}
                fr{" "}
              </option>
              <option value="en" onClick={() => i18n.changeLanguage("en")}>
                {" "}
                en{" "}
              </option>
              <option value="ar" onClick={() => i18n.changeLanguage("ar")}>
                {" "}
                ar{" "}
              </option>
            </select>
          </li>
        </ul>
        </div>
       :
       //show if it's mobil  
       <div>  
        
         </div>
        }
      </nav>
    </div>
  );
};

export default Header;
