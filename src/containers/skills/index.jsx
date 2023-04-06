import "./style.css";
import SkillsGrille from "../../components/skillsGrille";
import Filtre from "../../components/filter";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();

  
  return (
    <div className="skills" id={t("skills_path")} >
      <h1 className="title"> {t("skills_title")} </h1>
      <Filtre />
      <SkillsGrille />
    </div>
  );
};

export default Skills;
