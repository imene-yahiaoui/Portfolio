import "./style.min.css";
import cv from "./cv imene ikhlef yahiaoui.pdf";
import { useTranslation } from "react-i18next";

const DownloadBtn = () => {
  const { t } = useTranslation();
  return (
    <a
      className="btn_text"
      href={cv}
      target="_blank"
      rel="noreferrer"
      aria-label={t("Download")}
    >
      <button className="glow-on-hover" type="button">
        {t("Download")}
      </button>
    </a>
  );
};

export default DownloadBtn;
