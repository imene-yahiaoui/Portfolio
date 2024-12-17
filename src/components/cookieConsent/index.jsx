import React, { useState, useEffect } from "react";
import "./style.css";
import { useTranslation } from "react-i18next";

const CookieConsent: React.FC = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const lang = localStorage.getItem("i18nextLng");

  useEffect(() => {
    const consentGiven = localStorage.getItem("cookiesAccepted");
    if (!consentGiven) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setIsVisible(false);
    // Initialiser Google Analytics ou autre script ici
  };

  const handleDecline = () => {
    localStorage.setItem("cookiesAccepted", "false");
    setIsVisible(false);
  };

  const handleClose = () => {
    handleAccept();
  };

  if (!isVisible) return null;

  return (
    <div
      className="cookie-consent"
      style={{ flexDirection: lang === "ar" ? "row-reverse" : "row" }}
    >
      <button onClick={handleClose} className="cookie-close">
        ✖
      </button>
      <p>
        {t("cookiesMSG.title")}
        &nbsp;
        <a href="/CookiesPolicy" className="cookie-link">
          {t("cookiesMSG.CookiePolicy")}
        </a>
      </p>
      <div className="cookie-buttons">
        <button onClick={handleAccept} className="cookie-accept">
          {t("cookiesMSG.ok")}
        </button>
        <button onClick={handleDecline} className="cookie-decline">
          {t("cookiesMSG.no")}
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
