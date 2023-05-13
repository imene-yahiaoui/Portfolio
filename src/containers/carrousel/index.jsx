import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.min.css";
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
        showControls={false}
        key={project.id}
        infiniteloop
        thumbWidth={120}
        showIndicators={false}
        showStatus={false}
        type="slider"
      >
        <div className="img_carousel">
          <img src={project.pictures[index]} alt={`photoicon${index}`} />
        </div>
      </Carousel>
    ));
};

export default Carrousel;
