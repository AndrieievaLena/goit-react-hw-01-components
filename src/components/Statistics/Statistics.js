import PropTypes from "prop-types";
import s from"./Statistics.module.css"
const Statistics = ({  label, percentage }) => {
   
    return (
        <section>
             <div className={s.list}>
             <span className={s.label}>{label}</span>
             <span className={s.percentage}>{percentage} %</span>
             </div>
        </section>
      
    )
};

Statistics.propTypes = {
    label: PropTypes.string.isRequired,
     percentage: PropTypes.number.isRequired,
}
export default Statistics;
