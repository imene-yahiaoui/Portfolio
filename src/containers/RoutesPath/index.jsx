import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home";
import NotFound from "../../pages/notFound";
import Project from "../../pages/project";
import AboutMe from "../../pages/AboutMe";
const RoutesPath = () => {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Project/:id" element={<Project />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default RoutesPath;
