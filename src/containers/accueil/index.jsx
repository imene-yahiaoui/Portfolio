import "./style.css";
import Intro from "../intro";
import photoImene from "../../assets/images/imeneYahiaoui.webp";
import { useTranslation } from "react-i18next";
// import Particle from "../../helpers/Particle";
// import useMediaQuery from "../../helpers/MediaQuery";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Accueil = () => {
  const { t } = useTranslation();
  const lang = localStorage.getItem("i18nextLng");
  // const matches = useMediaQuery("(max-width:767px)");
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div id={t("home_id")}>
      {/* {!matches ? (
        <div className="particles-container">
          <Particle />
        </div>
      ) : null} */}
      <div
        style={{ flexDirection: lang === "ar" ? "row-reverse" : "row" }}
        className="container accueil"
      >
        <Intro />

        <div className="container_logo" data-aos="zoom-in-up">
          <img src={photoImene} alt={t("photo_alt")} />
        </div>
      </div>
    </div>
  );
};

export default Accueil;
