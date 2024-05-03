import InfoTable from "../../components/infoTable";
import EducationsList from "../../assets/json/Education.json";
import { useTranslation } from "react-i18next";
import useMediaQuery from "../../helpers/MediaQuery";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Educations() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const { t } = useTranslation();
  const lang = localStorage.getItem("i18nextLng");
  const matches = useMediaQuery("(max-width:950px)");
  const animation = !matches ? "fade-down-left" : "flip-down";

  return (
    <>
      <div
        className="infoTablel-container"
        data-aos={animation}
        data-aos-duration="3000"
        style={{ alignItems: lang === "ar" ? "flex-end" : "flex-start" }}
      >
        <h1 className="infoTablel-title">{t("Educations.Educations")} </h1>
        {EducationsList.map((education) => (
          <InfoTable
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
