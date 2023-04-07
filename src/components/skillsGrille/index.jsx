import "./style.css";

import { useSelector } from "react-redux";
import { selectUser } from "../../helpers/features/userSlice";
import { useState, useEffect } from "react";

const SkillsGrille = () => {
  const [posts, setPosts] = useState([]);

  const user = useSelector(selectUser);
  console.log(user);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requete = await fetch("../../skills.json", {
          method: "GET",
        });
        if (requete.ok) {
          const response = await requete.json();
          setPosts(response);
          console.log(response);
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return user.user === undefined ||
    user.user === null ||
    user.user === "الكل" ||
    user.user === "All" ||
    user.user === "Tout" ? (
    <div className="skillsGrille">
      {posts.map((skill) => (
        <div className="skillsGrille_item" key={skill.key}>
          <img src={skill.image} alt={skill.alt} />
          <b>{skill.name}</b>
        </div>
      ))}
    </div>
  ) : (
    <div className="skillsGrille">
      {posts
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
