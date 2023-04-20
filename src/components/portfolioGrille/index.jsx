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
          <h1 className="card_title"> {project.title} </h1>
          <div className="card_img">
            <img src={project.image} alt="" />
          </div>
          <div className="card_body">
            <p>{t(project.brief_description)}</p>
          </div>
          <div className="card_footer">
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
