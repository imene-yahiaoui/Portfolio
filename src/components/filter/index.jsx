import "./style.css";
import { useTranslation } from "react-i18next";
 import {useState} from "react"
 import { useDispatch } from "react-redux";
import { login } from "../../helpers/features/userSlice.js";
const Filtre = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
 const [category, setCategory]= useState();
console.log("value", category)
 dispatch(
  login({
    user: category,
  })
)

  return (
    <div>
    <select className="filtre" onChange={(e) => setCategory(e.target.value)}>
  <option value={t("all")}> {t("all")}</option>
  <option value="Frontend">Frontend</option>
  <option value="Backend">Backend</option>
  <option value="Mobile">Mobile</option>
</select>
    </div>
  );
};

export default Filtre;
