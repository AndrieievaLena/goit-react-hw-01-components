import PropTypes from "prop-types";
import s from"./Statistics.module.css"
function Statistics({ id, label, percentage})  {
    return (
            <li className={s.list} key={id}>
                <span className={s.label}>{label}</span>
                <span className={s.percentage}>{percentage}%</span>
            </li>
    )

}

Statistics.propTypes = {
    label: PropTypes.string.isRequired,
     percentage: PropTypes.number.isRequired,
}
export default Statistics;
