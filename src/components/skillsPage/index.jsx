import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";

import "./style.css";
const SkillsPage = () => {
  const [filtre, setFiltre] = useState();

  const handleFiltreChange = (value) => {
    setFiltre(value);
  };

  return (
    <div className="skillsGrille_continer">
      <Filtre onFiltreChange={handleFiltreChange} />
      <SkillsGrille filtre={filtre} />
    </div>
  );
};

// Filtre component
const Filtre = ({ onFiltreChange }) => {
  const { t } = useTranslation();

  const handleFiltreSelect = (e) => {
    onFiltreChange(e.target.value);
  };

  return (
    <div>
      <select className="filtre" onChange={handleFiltreSelect}>
        <option value={t("all")}> {t("all")}</option>
        <option value="Frontend">Frontend</option>
        <option value="Backend">Backend</option>
        <option value="Logiciel">{t("software")}</option>
        <option value="Mobile">{t("Mobile")}</option>
      </select>
    </div>
  );
};

// SkillsGrille component
const SkillsGrille = ({ filtre }) => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const skills = await fetch("../../jsons/skills.json", {
          method: "GET",
        });
        if (skills.ok) {
          const response = await skills.json();
          setSkills(response);
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchSkills();
  }, []);
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return filtre === undefined ||
    filtre === null ||
    filtre === "الكل" ||
    filtre === "All" ||
    filtre === "Tout" ? (
    <div className="skillsGrille">
      {skills.map((skill) => (
        <div
          className="skillsGrille_item"
          key={skill.key}
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className="skillsGrille_img">
            <img src={skill.image} alt={skill.alt} />
          </div>
          <b>{skill.name}</b>
        </div>
      ))}
    </div>
  ) : (
    <div className="skillsGrille">
      {skills
        .filter((skill) => skill.category === filtre)
        .map((skill) => (
          <div
            className="skillsGrille_item"
            key={skill.key}
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="skillsGrille_img">
              <img src={skill.image} alt={skill.alt} />
            </div>
            <b>{skill.name}</b>
          </div>
        ))}
    </div>
  );
};
export default SkillsPage;
