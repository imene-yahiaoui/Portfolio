import "./style.css";
function InfoTable({ title, startDate, Diplôme, localisation, endDate }) {
  const lang = localStorage.getItem("i18nextLng");
  return (
    <div
      className="infoTable_information"
      style={{ flexDirection: lang === "ar" ? "row-reverse" : "row" }}
    >
      <ul
        className="dateList"
        style={{
          borderLeft: lang === "ar" ? "2px solid #ceb1ff" : "none",
          borderRight: lang === "ar" ? "none" : "2px solid #ceb1ff",
        }}
      >
        <li>{startDate}</li>
        <li>-</li>
        <li>{endDate}</li>
      </ul>
      <section
        className="InfoTable_section"
        style={{
          paddingLeft: lang === "ar" ? "none" : "10px",
          paddingRight: lang === "ar" ? "10px" : "none",
          direction: lang === "ar" ? "rtl" : "ltr",
        }}
      >
        <h4>{title}</h4>
        <h5>{Diplôme}</h5>
        <h6>{localisation}</h6>
      </section>
    </div>
  );
}
export default InfoTable;
