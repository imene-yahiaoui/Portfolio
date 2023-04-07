import "./style.css";

import { useSelector } from "react-redux";
import { selectfiltre } from "../../helpers/features/filtreSlice";
import { useState, useEffect } from "react";

const SkillsGrille = () => {
  const [skills, setSkills] = useState([]);

  const filtre = useSelector(selectfiltre);
  console.log(filtre);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const skills = await fetch("../../jsons/skills.json", {
          method: "GET",
        });
        if (skills.ok) {
          const response = await skills.json();
          setSkills(response);
          console.log(response);
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchSkills();
  }, []);

  return filtre.filtre === undefined ||
    filtre.filtre === null ||
    filtre.filtre === "الكل" ||
    filtre.filtre === "All" ||
    filtre.filtre === "Tout" ? (
    <div className="skillsGrille">
      {skills.map((skill) => (
        <div className="skillsGrille_item" key={skill.key}>
          <img src={skill.image} alt={skill.alt} />
          <b>{skill.name}</b>
        </div>
      ))}
    </div>
  ) : (
    <div className="skillsGrille">
      {skills
        .filter((skill) => skill.category === filtre.filtre)
        .map((skill) => (
          <div className="skillsGrille_item" key={skill.key}>
            <img src={skill.image} alt={skill.alt} />
            <b>{skill.name}</b>
          </div>
        ))}
    </div>
  );
};

export default SkillsGrille;
