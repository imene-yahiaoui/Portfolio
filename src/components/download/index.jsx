import "./style.min.css";
import cv from "./cv imene ikhlef yahiaoui.pdf";
import { useTranslation } from "react-i18next";

const DownloadBtn = () => {
  const { t } = useTranslation();
  return (
    <button className="glow-on-hover" type="button">
      <a
        className="btn_text"
        href={cv}
        target="_blank"
        rel="noreferrer"
        aria-label={t("Download")}
      >
        {t("Download")}
      </a>
    </button>
  );
};

export default DownloadBtn;
