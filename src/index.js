import ReactDOM from "react-dom/client";
import "./i18n";
import "./index.min.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/loader"
const root = ReactDOM.createRoot(document.getElementById("root"));
const App = lazy(() => import("./App"));
const renderLoader = () => <Loader />

root.render(
  <BrowserRouter>
    <Suspense fallback={renderLoader()}>
      <App />
    </Suspense>
  </BrowserRouter>
);

reportWebVitals();
