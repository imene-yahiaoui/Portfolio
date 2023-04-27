import "./style.css";

import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const PortfolioGrille = (props) => {
  const { t } = useTranslation();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const requete = await fetch("../../jsons/portfolio.json", {
          method: "GET",
        });
        if (requete.ok) {
          const response = await requete.json();
          setProjects(response);
          console.log(response);
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="PortfolioGrille">
      {projects.map((project) => (
        <figure className="card" key={project.id}>
          <div className="card-face front">
            <img src={project.image} alt={project.title} />
            <h2 className="card_title "> {project.title} </h2>
          </div>
          <figcaption className="card-face back">
            <h2> {project.title} </h2>
            <p>{t(project.brief_description)}</p>
            <div className="glow-on-hover">
              <NavLink
                className="btn_text"
                to={`/Project/${project.id}`}
                key={project.id}
              >
                {t("Readmore")}
              </NavLink>
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
};

export default PortfolioGrille;
