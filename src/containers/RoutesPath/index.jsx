import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home";
import NotFound from "../../pages/notFound";



const RoutesPath = () => {

    

  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/*" element={<NotFound />} />
      
      </Routes>
    </div>
  );
};
export default RoutesPath;