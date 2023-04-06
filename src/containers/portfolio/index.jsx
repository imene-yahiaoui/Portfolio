import "./style.css";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
  const { t } = useTranslation();
  return <div id={t("portfolio_path")} className="portfoloi"  >
  <h1 className="title"> {t("portfolio_title")} </h1>

  </div>;
};

export default Portfolio;
