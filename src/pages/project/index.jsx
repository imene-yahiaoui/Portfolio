import "./style.css";

import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import Carrousel from "../../containers/carrousel";
// import Alboume from "../../components/albume"
const Project = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const requete = await fetch("../jsons/portfolio.json", {
          method: "GET",
        });
        if (requete.ok) {
          const response = await requete.json();
          setProjects(response);
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchProjects();
  }, []);
  const { t } = useTranslation();
  console.log(projects);

  const { id } = useParams();
  console.log(id);

  return (
    <div className="project">
      {projects
        .filter((project) => project.id === id)
        .map((project) => (
          <h6 className="project_title" key={project.id}>
            {project.title}
          </h6>
        ))}
      <div className="project_top">
        <div className="project_carousel">
          <Carrousel className="carousel" />
        </div>

        <div className="project_desc">
          {projects
            .filter((project) => project.id === id)
            .map((project) => (
              <p key={project.id}>{t(project.description_project)}</p>
            ))}
            <div className="project_boutom">
          <div className="Technologies">
            <h6>{t("Technologies_used")} </h6>
            <div className="technologyUsed_icons">
              {projects
                .filter((project) => project.id === id)
                .map((project) =>
                  project.technologyUsed.map((icon) => (
                    <ul className="wrapper" key={icon.name}>
                      <li className="icon icons">
                        <span className="tooltip">{icon.name}</span>
                        <span>
                          <img src={icon.icon} alt="icon" />
                        </span>
                      </li>
                    </ul>
                  ))
                )}
            </div>
          </div>
<div className="project_btn">

  </div>


          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Project;
