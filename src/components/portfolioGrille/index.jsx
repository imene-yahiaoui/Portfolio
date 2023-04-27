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
        <div className="card" key={project.id}>
          <img src={project.image} alt={project.title} />

          <div className="card-content">
            <h2> {project.title} </h2>
            <p>{t(project.brief_description)}</p>

            <NavLink to={`/Project/${project.id}`} key={project.id}>
              voir plus
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioGrille;
