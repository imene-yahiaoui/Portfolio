import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home";
import NotFound from "../../pages/notFound";
import Project from "../../pages/project";
import { BrowserRouter} from "react-router-dom";
const RoutesPath = () => {
  return (
    <div>
        <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Project/:id" element={<Project />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};
export default RoutesPath;
