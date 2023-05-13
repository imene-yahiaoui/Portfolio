import "./style.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
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
  useEffect(() => {
    AOS.init({ duration: 6000 });
  }, []);

  return (
    <div className="PortfolioGrille">
      {projects.map((project) => (
        <figure
          className="card"
          key={project.id}
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div className="card-face front">
            <img src={project.image} alt={project.alt} />
            <h2 className="card_title "> {project.title} </h2>
          </div>
          <figcaption className="card-face back">
            <h2> {project.title} </h2>
            <p>{t(project.brief_description)}</p>
            <div className="glow-on-hover">
              <NavLink
                to={`/Project/${project.id}`}
                className="btn_text"
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
