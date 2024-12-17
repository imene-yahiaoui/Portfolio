import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import RoutesPath from "./containers/RoutesPath";
import { useState, useEffect } from "react";
import DisplayMessage from "./components/displayMessage";
import CookieConsent from "./components/cookieConsent";
import ReactGA from "react-ga4";

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const initGoogleAnalytics = () => {
    ReactGA.initialize("G-4K01ML8RPH"); //ID  Google Analytics
    ReactGA.send("pageview");
  };
  useEffect(() => {
    // Vérifier le consentement déjà donné via localStorage ou un autre mécanisme
    const consentGiven = localStorage.getItem("cookiesAccepted");
    if (consentGiven === "true") {
      initGoogleAnalytics();
    }
  }, []);
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
    <>
      <CookieConsent />
      <div className="App">
        <Header />
        <RoutesPath />
        <Footer />
      </div>
    </>
  );
}

export default App;
