import { BiLock, BiCog, BiBarChartAlt2, BiBullseye } from "react-icons/bi";
import { FaBolt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

import "./style.css";

function CookiesPolicy() {
  const { t } = useTranslation();
  const lang = localStorage.getItem("i18nextLng");
  const resetCookies = () => {
    localStorage.removeItem("cookiesAccepted");

    window.location.reload();
  };

  return (
    <>
      <div
        className="cookies-policy-container"
        style={{ direction: lang === "ar" ? "rtl" : "ltr" }}
      >
        <h1>{t("cookies.title")}</h1>
        <p>{t("cookies.intro1")}</p>
        <p>{t("cookies.intro2")}</p>

        <h2>{t("cookies.types")}</h2>

        <h3>
          <BiLock style={{ color: "#1c0c5b", marginRight: "10px" }} />
          {t("cookies.essential")}
        </h3>
        <p>{t("cookies.essential_description")}</p>

        <h3>
          <BiCog style={{ color: "#1c0c5b", marginRight: "10px" }} />
          {t("cookies.functional")}
        </h3>
        <p>{t("cookies.functional_description")}</p>

        <h3>
          <BiBarChartAlt2 style={{ color: "#1c0c5b", marginRight: "10px" }} />
          {t("cookies.analytics")}
        </h3>
        <p>{t("cookies.analytics_description")}</p>

        <h3>
          <FaBolt style={{ color: "#1c0c5b", marginRight: "10px" }} />
          {t("cookies.performance")}
        </h3>
        <p>{t("cookies.performance_description")}</p>

        <h3>
          <BiBullseye style={{ color: "#1c0c5b", marginRight: "10px" }} />
          {t("cookies.advertising")}
        </h3>
        <p>{t("cookies.advertising_description")}</p>

        {/* Bouton pour réinitialiser les cookies */}
        <button className="reset-cookies-btn" onClick={resetCookies}>
          {t("cookies.reset_button")}
        </button>
      </div>
    </>
  );
}

export default CookiesPolicy;
