import { useTranslation } from "react-i18next";

const MoreInfoBtn = () => {
  const { t } = useTranslation();
  return (
    <button className="glow-on-hover" type="button">
      <a
        className="btn_text"
        href={t("aboutMe_path")}
        rel="noreferrer"
        aria-label={t("aboutMe")}
      >
        {t("aboutMe")}
      </a>
    </button>
  );
};

export default MoreInfoBtn;
