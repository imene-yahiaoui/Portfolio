import "./style.css";
import Experiences from "../../containers/experiences";
import Educations from "../../containers/educations";

const AboutMe = () => {
  const lang = localStorage.getItem("i18nextLng");

  return (
    <div>
      <div className="aboutMe_container"   style={{ flexDirection: lang === "ar" ? "row-reverse" : "row" }}>
        <Experiences />
        <Educations />
      </div>
    </div>
  );
};
export default AboutMe;
