import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home";
import NotFound from "../../pages/notFound";
import Project from "../../pages/project";

const RoutesPath = (projects) => {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home projects={projects}/>} />
        <Route path="/Project/:id" element={<Project projects={projects}/>} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default RoutesPath;
