import InfoTable from "../../components/infoTable";
import ExperiencesList from "../../assets/json/Experiences.json";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Experiences() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const { t } = useTranslation();
  return (
    <>
      <div
        className="infoTablel-container"
        data-aos="fade-down-right"
        data-aos-duration="3000"
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
