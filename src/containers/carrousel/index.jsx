import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.css";
import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";

const Carrousel = () => {
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
          console.log(response);
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchProjects();
  }, []);
  const [index, setCurrentindex] = useState(0);
  const { id } = useParams();

  const slidesLenghth = projects
    .filter((post) => post.id === id)
    .map((post) => post.pictures.length);

  ///function suivant
  const goToNext = () => {
    const lastSlide = index === slidesLenghth - 1;

    const newIndex = lastSlide ? 0 : index + 1;
    setCurrentindex(newIndex);
  };
  setTimeout(() => {
    goToNext();
  }, 2000);

  return projects
    .filter((project) => project.id === id)
    .map((project) => (
      <Carousel
        autoPlay
        key={project.id}
        inreval={6000}
        infiniteloop
        thumbWidth={120}
        showIndicators={false}
        showStatus={false}
        
      >
        <div>
          <img src={project.pictures[index]} alt="photoicon" />
        </div>
      </Carousel>
    ));
};

export default Carrousel;
