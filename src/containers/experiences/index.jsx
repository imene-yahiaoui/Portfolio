import InfoTable from "../../components/infoTable";
import ExperiencesList from "../../assets/json/Experiences.json";
import { useTranslation } from "react-i18next";

function Experiences() {
  const { t } = useTranslation();
  return (
    <>
      <div className="infoTablel-container">
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
