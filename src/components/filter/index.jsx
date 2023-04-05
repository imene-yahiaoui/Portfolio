import "./style.css";
import { useTranslation } from "react-i18next";
 import {useState} from "react"
 import { useDispatch } from "react-redux";
import { login } from "../../helpers/features/userSlice.js";
const Filtre = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
 const [category, setCategory]= useState();

 dispatch(
  login({
    user: category,
  })
)

  return (
    <div>
      <select className="filtre">
        <option
          value={t("all")}
          onClick={() => setCategory(t("all")) }
        >
          {" "}
          {t("all")}{" "}
        </option>
        <option
          value="Frontend"
          onClick={() => setCategory("Frontend")}
        >
          {" "}
          Frontend{" "}
        </option>
        <option
          value="Backend"
          onClick={() => setCategory("Backend")}
        >
          {" "}
          Backend{" "}
        </option>
        <option
          value="Mobile"
          onClick={() =>setCategory("Mobile")}
        >
          {" "}
          Mobile{" "}
        </option>
      </select>
    </div>
  );
};

export default Filtre;
