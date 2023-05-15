import "./style.min.css";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <div>
      <header className="top-header"></header>

      <div>
        <div className="stars"></div>
        <div className="stars_secend"></div>
        <div className="stars_three"></div>
        <div className="stars_four"></div>
      </div>

      <div className="lamp__wrap">
        <div className="lamp">
          <div className="cable"></div>
          <div className="cover"></div>
          <div className="in-cover">
            <div className="bulb"></div>
          </div>
          <div className="light"></div>
        </div>
      </div>

      <section className="error">
        <div className="error__content">
          <div className="error__message message">
            <h1 className="message__title">{t("notFound.message__title")}</h1>
            <p className="message__text">{t("notFound.message__text")}</p>
          </div>
          <div className="error__nav">
            <a href="/" className="e-nav__link">
              {t("notFound.message__btn")}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
export default NotFound;
