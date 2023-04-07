import "./style.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { category } from "../../helpers/features/filtreSlice.js";
const Filtre = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [categori, setCategori] = useState();

  dispatch(
    category({
      filtre: categori,
    })
  );

  return (
    <div>
      <select className="filtre" onChange={(e) => setCategori(e.target.value)}>
        <option value={t("all")}> {t("all")}</option>
        <option value="Frontend">Frontend</option>
        <option value="Backend">Backend</option>
        <option value="Logiciel">Logiciel</option>
        <option value="Mobile">Mobile</option>
      </select>
    </div>
  );
};

export default Filtre;
