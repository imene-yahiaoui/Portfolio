import "./style.css";
import { useTranslation } from "react-i18next";

const Intro = () => {
  const { t } = useTranslation();

  return (
    <div className="intro-continer">
      <h1> {t("main_heading.hello")} </h1>
      <h1>{t("main_heading.name")} </h1>
      <div>
        <h3> {t("main_heading.static_desc")} </h3>
        <h3> {t("main_heading.dynamic_desc")} </h3>
      </div>
      <div>
        <p> {t("description_info.main")} </p>
      </div>
    </div>
  );
};

export default Intro;
