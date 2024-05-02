import "./style.css";
function InfoTable({ title, startDate, Diplôme, localisation, endDate }) {
  return (
    <div className="case">
      <ul className="dateList">
        <li>{startDate}</li>
        <li>-</li>
        <li>{endDate}</li>
      </ul>
      <section className="section">
        <h4>{title}</h4>
        <h5>{Diplôme}</h5>
        <h6>{localisation}</h6>
      </section>
    </div>
  );
}
export default InfoTable;
