import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import RoutesPath from "./containers/RoutesPath";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  return (
    <div className="App">
      {/* <Parallax page={3} style={{ backgroundImage: "var(--body_background)" }}> */}
        {/* <ParallaxLayer offset={0}></ParallaxLayer>
        <ParallaxLayer offset={1}> </ParallaxLayer>
        <ParallaxLayer offset={2}> </ParallaxLayer> */}
        <Header />
        <RoutesPath />
        <Footer />
      {/* </Parallax> */}
    </div>
  );
}

export default App;
