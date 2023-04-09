import "./style.css";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import Carrousel from "../../containers/carrousel";
const Project = () => {
  const [projects, setProjects] = useState([]);
  const [index, setCurrentindex] = useState(0);
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

  const { id } = useParams();
  console.log(id);

  const { t } = useTranslation();


  ///slidesLenghth
  const slidesLenghth = projects
    .filter((project) => project.id === id)
    .map((project) => project.pictures.length);

  /// function presedent
  const goToPrevious = () => {
    const firstSlide = index === 0;

    const newIndex = firstSlide ? slidesLenghth - 1 : index - 1;

    setCurrentindex(newIndex);
  };
  ///function suivant
  const goToNext = () => {
    const lastSlide = index === slidesLenghth - 1;

    const newIndex = lastSlide ? 0 : index + 1;
    setCurrentindex(newIndex);
  };

  ////keyboard
  function keyclavier(e) {
    if (e.keyCode === 37) {
      goToPrevious();
    } else if (e.keyCode === 39) {
      goToNext();
    }
  }
  document.addEventListener("keydown", keyclavier);

console.log(index);
  return (
     <div className="project">
      
      <div className="carrousel_imgs">
            {projects
              .filter((project) => project.id === id)
              .map((project) => (
                <Carrousel slides={project.pictures[index]} key={project.id} />
              ))}

            {projects
              .filter((project) => project.id === id)
              .map((project) => (
                <i
                  style={{
                    display: project.pictures.length === 1 ? "none" : "block",
                  }}
                  key={project.id}
                  className="fa-solid fa-angle-left"
                  onClick={goToPrevious}
                ></i>
              ))}
            {projects
              .filter((project) => project.id === id)
              .map((project) => (
                <i
                  style={{
                    display: project.pictures.length === 1 ? "none" : "block",
                  }}
                  key={project.id}
                  className="fa-solid fa-angle-right"
                  onClick={goToNext}
                ></i>
              ))}

    </div>
     </div>
  );
};

export default Project;
