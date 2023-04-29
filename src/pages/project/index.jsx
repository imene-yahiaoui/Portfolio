import "./style.css";
import { IoArrowBackOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import Carrousel from "../../containers/carrousel";
import ProjectBtn from "../../components/projectBtn";
const Project = () => {
  const lang = localStorage.getItem("i18nextLng");
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
      <div className="project_header">
        <a href="/">
          <IoArrowBackOutline
            className="iconBack"
            onMouseOver={({ target }) =>
              (target.style.color = "var(--background_icons)")
            }
            onMouseOut={({ target }) =>
              (target.style.color = "var(--body_color)")
            }
          />
        </a>
        {projects
          .filter((project) => project.id === id)
          .map((project) => (
            <h6 className="project_title" key={project.id}>
              {project.title}
            </h6>
          ))}
      </div>
      <div
        style={{ flexDirection: lang === "ar" ? "row" : "row-reverse" }}
        className="project_page"
      >
        <div className="project_carousel">
          <Carrousel className="carousel" />
        </div>

        <div
          style={{ direction: lang === "ar" ? "rtl" : "ltr" }}
          className="project_descreption"
        >
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
                          <span className="tooltip">{icon.name} </span>
                          <span>
                            <img src={icon.icon} alt="icon" />
                          </span>
                        </li>
                      </ul>
                    ))
                  )}
              </div>
            </div>
            {projects
              .filter((project) => project.id === id)
              .map((project) =>
                project.site && project.github ? (
                  <div className="project_btn" key={project.id}>
                    <ProjectBtn destination={project.site} title="Site Web" />
                    <ProjectBtn
                      destination={project.github}
                      title="Code source"
                    />
                  </div>
                ) : project.github && !project.site ? (
                  <div className="project_btn" key={project.id}>
                    <ProjectBtn
                      destination={project.github}
                      title="Code source"
                    />
                  </div>
                ) : (
                  <div className="project_btn" key={project.id}>
                    <ProjectBtn destination={project.site} title="Site Web" />
                  </div>
                )
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
