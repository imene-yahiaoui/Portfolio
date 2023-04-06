import "./style.css";
import html from "../../assets/images/technologyIcons/html.png";
import css from "../../assets/images/technologyIcons/css-3.png";
import github from "../../assets/images/technologyIcons/github.png";
import figma from "../../assets/images/technologyIcons/figma.png";
import express from "../../assets/images/technologyIcons/express-1.png";
import js from "../../assets/images/technologyIcons/js.png";
import mongodb from "../../assets/images/technologyIcons/mongodb.png";
import android from "../../assets/images/technologyIcons/Android_Studio.png";
import bootstrap from "../../assets/images/technologyIcons/bootstrap.png";
import node from "../../assets/images/technologyIcons/nodejs.png";
import react from "../../assets/images/technologyIcons/react.png";
import sass from "../../assets/images/technologyIcons/sass.png";
import postman from "../../assets/images/technologyIcons/postman.png";
import kotlin from "../../assets/images/technologyIcons/kotlin.png";
import admobe from "../../assets/images/technologyIcons/admobe.png";
import git from "../../assets/images/technologyIcons/git.png";
import seo from "../../assets/images/technologyIcons/seo.png";
import VS from "../../assets/images/technologyIcons/vs.png";
import redux from "../../assets/images/technologyIcons/redux.png";
import { useSelector } from "react-redux";
import { selectUser } from "../../helpers/features/userSlice";

import { useTranslation } from "react-i18next";

const SkillsGrille = () => {
  const user = useSelector(selectUser);
  console.log(user);
  const { t } = useTranslation();
  const tout = t("all");

  const skillsCategory = [
    {
      image: html,
      alt: "html icon ",
      name:"Html",
      category: "Frontend",
      key: "1",
    },
    {
      image: css,
      alt: " icon css",
      name:"Css",
      category: "Frontend",
      key: "2",
    },
    {
      image: admobe,
      alt: " icon admobe",
      name:"Admob",
      category: "Logiciel",
      key: "3",
    },
    {
      image: github,
      alt: "icon github",
      name:"Github",
      category: "Logiciel",
      key: "4",
    },
    {
      image: figma,
      alt: " icon figma",
      name:"Figma",
      category: "Frontend",
      key: "5",
    },
    {
      image: express,
      alt: "icon express",
      name:"Express",
      category: "Backend",
      key: "6",
    },
    {
      image: js,
      alt: "icon js",
      name:"JavaScript",
      category: "Frontend",
      key: "7",
    },
    {
      image: mongodb,
      alt: "icon mongodb",
      name:"Mongodb",
      category: "Backend",
      key: "8",
    },
    {
      image: node,
      alt: "icon node.js",
      name:"Node.js",
      category: "Backend",
      key: "9",
    },
    {
      image: bootstrap,
      alt: "icon bootstrap",
      name:"Bootstrap",
      category: "Frontend",
      key: "10",
    },
    {
      image: kotlin,
      alt: " icon Kotlin",
      name:"Kotlin",
      category: "Mobile",
      key: "11",
    },
    {
      image: android,
      alt: "icon android stodio",
      name:"Android Studio",
      category: "Logiciel",
      key: "12",
    },
    {
      image: postman,
      alt: "icon postman",
      name:"Postman",
      category: "Logiciel",
      key: "13",
    },
    {
      image: react,
      alt: "React ",
      category: "Frontend",
      key: "14",
    },
    {
      image: sass,
      alt: "icon sass",
      name:"Sass",
      category: "Frontend",
      key: "15",
    },
    {
      image: git,
      alt: "icon git",
      name:"Git",
      category: "Logiciel",
      key: "16",
    },
    {
      image: VS,
      alt: "icon vs",
      name:"Visual Studio",
      category: "Logiciel",
      key: "17",
    },
    {
      image: seo,
      alt: "icon seo",
      name:"Seo",
      category: "Logiciel",
      key: "18",
    },
    {
      image: redux,
      alt: "icon redux",
      name:"Redux",
      category: "Frontend",
      key: "19",
    },
  ];

  return user.user === tout || user.user === undefined || user.user === null ? (
    <div className="skillsGrille">
      {skillsCategory.map((skill) => (
        <div className="skillsGrille_item" key={skill.key}>
          <img src={skill.image} alt={skill.alt} />
          <b>{skill.name}</b>
        </div>
      ))}
    </div>
  ) : (
    <div className="skillsGrille">
      {skillsCategory
        .filter((post) => post.category === user.user)
        .map((skill) => (
          <div className="skillsGrille_item" key={skill.key}>
            <img src={skill.image} alt={skill.alt} />
            <b>{skill.name}</b>
          </div>
        ))}
    </div>
  );
};

export default SkillsGrille;
