import "./style.min.css";

const Loader = () => {
  return (
    <div className="loader-page-container">
      <div className="loader-container">
        <div className="loader-wrap">
          <div className="loader loader-2"></div>
        </div>
        <p className="code-block loading-text">Loading....</p>
      </div>
    </div>
  );
};

export default Loader;
