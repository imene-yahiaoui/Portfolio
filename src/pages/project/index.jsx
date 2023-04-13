import "./style.css";

import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
//  import { useState, useEffect } from "react";
import Carrousel from "../../containers/carrousel";
const Project = ({projects}) => {
  const { t } = useTranslation();
console.log(projects)
 

  const { id } = useParams();
  console.log(id);


  return (
    <div className="project">
      <div className="project_top">
        <div className="project_carousel">
          <Carrousel />
        </div>
        <div className="project_desc">
          <p>
            Booki est le premier projet de développement web sur lequel j'ai
            travaillé dans la formation d'intégrateur web chez OpenClassrooms.\n
            Mon rôle a été d'intégrer les maquettes fournies par l'équipe de
            conception UI et de les transformer en une interface web
            fonctionnelle à l'aide de HTML et CSS.\n Le projet a commencé par
            l'analyse des maquettes, fournies sous forme de fichiers Figma pour
            différentes tailles d'écran. En suivant les meilleures pratiques de
            développement web et en respectant les normes de qualité établies,
            j'ai travaillé sur l'intégration des maquettes en HTML et CSS.\n
            J'ai également veillé à ce que le site web soit adaptatif,
            c'est-à-dire qu'il s'adapte automatiquement à différents types et
            tailles d'écran.{" "}
          </p>
        </div>
      </div>
      {/* <div className="Technologies">
        <h6>{t("Technologies_used")} </h6>
        <div className="technologyUsed_icons">
          {projects
            .filter((project) => project.id === id)
            .map((project) =>
              project.technologyUsed.map((icon) => (
                <ul className="wrapper">
                  <li className="icon twitter">
                    <span className="tooltip">{icon.name}</span>
                    <span>
                      <img src={icon.icon} alt="icon" />
                    </span>
                  </li>
                </ul>
              ))
            )}
        </div>
      </div> */}
    </div>
  );
};

export default Project;
