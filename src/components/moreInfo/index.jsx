import { useTranslation } from "react-i18next";

const MoreInfoBtn = () => {
  const { t } = useTranslation();
  return (
    <a
      className="btn_text"
      href={t("aboutMe_path")}
      rel="noreferrer"
      aria-label={t("aboutMe")}
    >
      <button className="glow-on-hover" type="button">
        {t("aboutMe")}
      </button>
    </a>
  );
};

export default MoreInfoBtn;
