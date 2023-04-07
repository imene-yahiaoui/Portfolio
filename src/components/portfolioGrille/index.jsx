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
        <div className="PortfolioGrille_item">
          <div className="PortfolioGrille_img">
            <img src={l} alt="ffff" />
          </div>
          <h1> {t(project.title)} </h1>
          <p> plabla blabalbla </p>
          <a href="/d">Click ici</a>
        </div>
      ))}
    </div>
  );
};

export default PortfolioGrille;
