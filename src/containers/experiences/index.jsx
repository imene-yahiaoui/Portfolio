import InfoTable from "../../components/infoTable";
import ExperiencesList from "../../assets/json/Experiences.json";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import useMediaQuery from "../../helpers/MediaQuery";
function Experiences() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const { t } = useTranslation();
  const lang = localStorage.getItem("i18nextLng");
  const matches = useMediaQuery("(max-width:950px)");
  const animation = !matches ? "fade-down-right" : "flip-up";
  return (
    <>
      <div
        className="infoTablel-container"
        data-aos={animation}
        data-aos-duration="3000"
        style={{ alignItems: lang === "ar" ? "flex-end" : "flex-start" }}
      >
        <h1 className="infoTablel-title">{t("Experiences.Experiences")} </h1>
        {ExperiencesList.map((experience) => (
          <InfoTable
            key={experience.title}
            title={t(experience.title)}
            startDate={experience.startDate}
            Diplôme={t(experience.Diplôme)}
            localisation={t(experience.localisation)}
            endDate={experience.endDate}
          />
        ))}
      </div>
    </>
  );
}
export default Experiences;
