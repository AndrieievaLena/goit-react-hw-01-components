import Statistics from "./Statistics";


const StatisticsList = ({ stats }) => {
    return (
     <div>
            <h2>Upload stats</h2>
         
           <ul>
                {stats.map(stat => (
                    <li key={stat.id}>
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