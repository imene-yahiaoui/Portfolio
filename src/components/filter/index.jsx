import "./style.css";

const Filtre = () => {
  return (
    <div>
      <select className="filtre">
        <option value="fr" onClick={() => console.log("f")}>
          {" "}
          fr{" "}
        </option>
        <option value="en" onClick={() => console.log("f")}>
          {" "}
          en{" "}
        </option>
        <option value="ar" onClick={() => console.log("f")}>
          {" "}
          ar{" "}
        </option>
      </select>
    </div>
  );
};

export default Filtre;
