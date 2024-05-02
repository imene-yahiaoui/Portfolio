import "./style.css";
import Experiences from "../../containers/experiences";
import Educations from "../../containers/educations";
const AboutMe = () => {
  return (
    <div>
      <div className="aboutMe_container">
        <Experiences />
        <Educations />
      </div>
    </div>
  );
};
export default AboutMe;
