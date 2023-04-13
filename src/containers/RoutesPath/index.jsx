import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home";
import NotFound from "../../pages/notFound";
import Project from "../../pages/project";

const RoutesPath = () => {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Project/:id" element={<Project />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default RoutesPath;
