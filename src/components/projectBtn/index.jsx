import "./style.css";

const ProjectBtn = (props) => {
  return (
    <button className="ProjectBtn">
      <a href={props.destination} target="_blank" rel="noreferrer">
        {props.title}
      </a>
    </button>
  );
};
export default ProjectBtn;
