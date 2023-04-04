import "./style.css";
import Accueil from "../../containers/accueil";
import Skills  from "../../containers/skills";
const Home = () => {
  return (
    <div className="home">
      <Accueil />

      <Skills/>
    </div>
  );
};

export default Home;
