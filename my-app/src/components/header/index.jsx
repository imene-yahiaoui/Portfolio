import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./style.css";

const Header = () => {
  // const { t, i18n } = useTranslation();
  const { i18n, t } = useTranslation();
  return (
    <div className="header">
      <nav className="nav">
        <ul>
          <li className="test">{t("home_title")}</li>
          <li>
            <select>
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
      </nav>
    </div>
  );
};

export default Header;
