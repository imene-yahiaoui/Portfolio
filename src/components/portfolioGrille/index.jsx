import "./style.css";
import l from "../../assets/images/logo.png";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
const PortfolioGrille = () => {
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
        <div className="PortfolioGrille_item" key={project.id}>
          <div className="PortfolioGrille_img">
            <img src={l} alt="ffff" />
          </div>
          <h1> {project.title} </h1>
          <p> {t(project.description)} </p>
          <h6>{t("Technologies_used")} </h6>
          <div className="technologyUsed_icons">
          {project.technologyUsed.map((icon) => (
         <div className="img_item">
<img src={icon} alt="icon"/>
         </div>   ))} </div>
          <a href="/d">Click ici</a>
        </div>
      ))}
    </div>
  );
};

export default PortfolioGrille;
