import "./style.min.css";
import { useTranslation } from "react-i18next";
import DownloadBtn from "../../components/download";
import SocialMedia from "../../components/socialMedia";

const Intro = () => {
  const { t } = useTranslation();
  const lang = localStorage.getItem("i18nextLng");

  return (
    <div
      style={{ direction: lang === "ar" ? "rtl" : "ltr" }}
      itemScope
      itemType="http://schema.org/Person"
      className="intro-continer"
    >
      <h1> {t("main_heading.hello")} 👋 </h1>
      <h2
        className="intro-name"
        itemProp="name"
        data-text={t("main_heading.name")}
      >
        {t("main_heading.name")}
      </h2>

      <div className="intro_des" itemProp="jobTitle">
        <h3>
          {" "}
          {t("main_heading.static_desc")} {t("main_heading.dynamic_desc")}
        </h3>
      </div>
      <div>
        <p> {t("description_info.main")} </p>
      </div>
      <div className="intro_contact">
        <div>
          <SocialMedia />
        </div>

        <DownloadBtn />
      </div>
    </div>
  );
};

export default Intro;
