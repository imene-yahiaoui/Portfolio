import "./style.css";
import SkillsGrille from "../../components/skillsGrille";
import Filtre from "../../components/filter";
const Skills = () => {
  return (
    <div className="skills">
      <Filtre />
      <SkillsGrille />
    </div>
  );
};

export default Skills;
