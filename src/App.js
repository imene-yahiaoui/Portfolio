import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import RoutesPath from "./containers/RoutesPath";
 

function App() {
  return (
    <div className="App">
   
        <Header />
        <RoutesPath />
        <Footer />
    
    </div>
  );
}

export default App;
