import PropTypes from "prop-types";
import "./Statistics.css"
const Statistics = ({  label, percentage }) => {
   
    return (
        <section>
             <div className="statisticlist">
             <span className="staticlabel">{label}</span>
             <span className="percentage">{percentage} %</span>
             </div>
        </section>
      
    )
};

Statistics.propTypes = {
    label: PropTypes.string.isRequired,
     percentage: PropTypes.number.isRequired,
}
export default Statistics;
