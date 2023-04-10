import "./style.css";
import Accueil from "../../containers/accueil";
import Skills from "../../containers/skills";
import Portfolio from "../../containers/portfolio";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="home">
      <Accueil id={t("home_path")} />

      <Skills />

      <Portfolio />
    </div>
  );
};

export default Home;
