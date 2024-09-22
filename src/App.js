import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import RoutesPath from "./containers/RoutesPath";
import { useState, useEffect } from "react";
import DisplayMessage from "./components/displayMessage";

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Afficher un message si l'utilisateur est hors ligne
    if (!isOnline) {
      DisplayMessage(
        "Vous êtes hors ligne. Certaines fonctionnalités peuvent ne pas être disponibles",
        "linear-gradient(to right, #b90909, #b90908)"
      );
    }

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [isOnline]);

  return (
    <div className="App">
      <Header />
      <RoutesPath />
      <Footer />
    </div>
  );
}

export default App;
