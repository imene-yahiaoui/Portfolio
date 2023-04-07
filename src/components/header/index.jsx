/* eslint-disable react/style-prop-object */
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../../assets/images/logo.png";
import "./style.css";
import useMediaQuery from "../../helpers/MediaQuery";
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState } from "react";
import DarkMode from "../darkMode";
const Header = () => {
  const matches = useMediaQuery("(max-width:767px)");
  const { t, i18n } = useTranslation();

  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const handleToggleMenux = () => {
    setShowMenu(!showMenu);
  };
  console.log(showMenu);
  return (
    <div className="header" id={t("home_path")}>
      <div className="navbar">
        <nav className="container">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt={t("logo_alt")} />
            </Link>
          </div>

          {!matches ? (
            <div className="nav-elements">
              <ul>
                <li className="nav_list">
                  <Link to={t("home_path")}>{t("home_title")}</Link>
                </li>
                <li className="nav_list">
                  <Link to={t("skills_path")}>{t("skills_title")}</Link>
                </li>
                <li className="nav_list">
                  <Link to={t("portfolio_path")}>{t("portfolio_title")}</Link>
                </li>
                <li className="nav_list">
                  <Link to={t("contact_path")}>{t("contact_title")}</Link>
                </li>
                <li>
                  <DarkMode />
                </li>
                <li>
                  <select
                    className="btn_lang"
                    onChange={(e) => i18n.changeLanguage(e.target.value)}
                  >
                    <option value="fr">fr</option>
                    <option value="en">en</option>
                    <option value="ar">ar</option>
                  </select>
                </li>
              </ul>
            </div>
          ) : (
            //show if it's mobil
            <div className="navbar-header">
              <div className="navbar-icon">
                {!showMenu ? (
                  <button onClick={handleToggleMenu}>
                    <FaBars />
                  </button>
                ) : (
                  <button onClick={handleToggleMenux}>
                    {" "}
                    <FaTimes />
                  </button>
                )}
              </div>
              <div className={`navbar-menu${showMenu ? " active" : ""}`}>
                <ul className="nav-menu titles">
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
                    <DarkMode />
                  </li>
                  <li>
                    <select
                      className="btn_lang"
                      onChange={(e) => i18n.changeLanguage(e.target.value)}
                    >
                      <option value="fr">fr</option>
                      <option value="en">en</option>
                      <option value="ar">ar</option>
                    </select>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Header;
