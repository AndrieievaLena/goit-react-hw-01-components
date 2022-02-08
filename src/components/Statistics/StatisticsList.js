import Statistics from "./Statistics";
import "./Statistics.css"

const StatisticsList = ({ stats }) => {
    return (
     <div  className="Statistics">
            <h2 className="statictitle">Upload stats</h2>
         
           <ul className="statisticinfo">
                {stats.map(stat => (
                    <li  key={stat.id}>
                        <Statistics
                            label={stat.label}
                            percentage={stat.percentage}
                        />

                    </li>
                 )
            
                )}
          </ul>
     </div>
    )
};
   

export default StatisticsList;