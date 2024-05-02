import "./style.css";
function InfoTable({ title, startDate, Diplôme, localisation, endDate }) {
  const lang = localStorage.getItem("i18nextLng");
  return (
    <div
      className="infoTable_information"
      style={{ flexDirection: lang === "ar" ? "row-reverse" : "row" }}
    >
      <ul className="dateList">
        <li>{startDate}</li>
        <li>-</li>
        <li>{endDate}</li>
      </ul>
      <section
        className="InfoTable_section"
        style={{ alignItems: lang === "ar" ? "flex-end" : "flex-start" }}
      >
        <h4>{title}</h4>
        <h5>{Diplôme}</h5>
        <h6>{localisation}</h6>
      </section>
    </div>
  );
}
export default InfoTable;
