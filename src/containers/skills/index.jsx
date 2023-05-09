import "./style.css";
import SkillsPage from "../../components/skillsPage";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <div className="skills" id={t("skills_id")}>
      <h1 className="title"> {t("skills_title")} </h1>

      <SkillsPage />
    </div>
  );
};

export default Skills;
