import "./style.css";
import { useTranslation } from "react-i18next";

const Filtre = () => {
  const { t } = useTranslation();
  return (
    <div>
      <select className="filtre">
        <option value={t("all")} onClick={() => console.log(t("all"))}>
          {" "}
          {t("all")}{" "}
        </option>
        <option value="Frontend" onClick={() => console.log("Frontend")}>
          {" "}
          Frontend{" "}
        </option>
        <option value="Backend" onClick={() => console.log("Backend")}>
          {" "}
          Backend{" "}
        </option>
        <option value="Mobile" onClick={() => console.log("Mobile")}>
          {" "}
          Mobile{" "}
        </option>
      </select>
    </div>
  );
};

export default Filtre;
