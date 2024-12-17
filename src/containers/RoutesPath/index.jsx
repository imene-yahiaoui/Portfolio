import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home";
import NotFound from "../../pages/notFound";
import Project from "../../pages/project";
import AboutMe from "../../pages/AboutMe";
import Solotion from "../../pages/solotion";
import ArticleDetail from "../../pages/ArticleDetail";
import CookiesPolicy from "../../pages/cookiesPolicy";
const RoutesPath = () => {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Project/:id" element={<Project />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Solotion" element={<Solotion />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/cookiesPolicy" element={<CookiesPolicy />} />
      </Routes>
    </div>
  );
};
export default RoutesPath;
