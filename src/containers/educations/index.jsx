import InfoTable from "../../components/infoTable";
import EducationsList from "../../assets/json/Education.json";
import { useTranslation } from "react-i18next";
function Educations(titleTable) {
  const { t } = useTranslation();
  return (
    <>
      <div className="infoTablel-container">
        <h1 className="infoTablel-title">{t("Educations.Educations")} </h1>
        {EducationsList.map((education) => (
          <InfoTable
            titleTable="education"
            key={education.startDate}
            title={t(education.title)}
            startDate={education.startDate}
            Diplôme={t(education.Diplôme)}
            localisation={t(education.localisation)}
            endDate={education.endDate}
          />
        ))}
      </div>
    </>
  );
}
export default Educations;
