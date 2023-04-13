import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import RoutesPath from "./containers/RoutesPath";
import { useState, useEffect } from "react";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
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
  console.log("resu",projects)
  return (
    <div className="App">
      {/* <Parallax page={3} style={{ backgroundImage: "var(--body_background)" }}> */}
        {/* <ParallaxLayer offset={0}></ParallaxLayer>
        <ParallaxLayer offset={1}> </ParallaxLayer>
        <ParallaxLayer offset={2}> </ParallaxLayer> */}
        <Header />
        <RoutesPath projects={projects} />
        <Footer />
      {/* </Parallax> */}
    </div>
  );
}

export default App;
