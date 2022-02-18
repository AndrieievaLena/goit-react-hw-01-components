import Statistics from "./Statistics";
import s from "./Statistics.module.css"

const StatisticsList = ({ stats }) => {
    return (
     <div  className={s.Statistics}>
            <h2 className={s.title}>Upload stats</h2>
         
           <ul className={s.info}>
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