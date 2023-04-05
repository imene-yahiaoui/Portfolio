import "./style.css";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { login } from "../../helpers/features/userSlice.js";

const Filtre = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  return (
    <div>
      <select className="filtre">
        <option
          value={t("all")}
          onClick={() =>
            dispatch(
              login({
                user: t("all"),
              })
            )
          }
        >
          {" "}
          {t("all")}{" "}
        </option>
        <option
          value="Frontend"
          onClick={() =>
            dispatch(
              login({
                user: "Frontend",
              })
            )
          }
        >
          {" "}
          Frontend{" "}
        </option>
        <option
          value="Backend"
          onClick={() =>
            dispatch(
              login({
                user: "Backend",
              })
            )
          }
        >
          {" "}
          Backend{" "}
        </option>
        <option
          value="Mobile"
          onClick={() =>
            dispatch(
              login({
                user: "Mobile",
              })
            )
          }
        >
          {" "}
          Mobile{" "}
        </option>
      </select>
    </div>
  );
};

export default Filtre;
