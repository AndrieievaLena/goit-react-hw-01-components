import PropTypes from "prop-types";
const Statistics = ({  label, percentage }) => {
   
    return (
        <section>
             
              <span class="label">{label}</span>
              <span class="percentage">{percentage}%</span>
         
  
        </section>
      
    )
};

Statistics.propTypes = {
    label: PropTypes.string.isRequired,
     percentage: PropTypes.number.isRequired,
}
export default Statistics;
