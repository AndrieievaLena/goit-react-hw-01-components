import Statistics from "./Statistics";
import s from "./Statistics.module.css"

const StatisticsList = ({ stats, title }) => {
    return (
        <section className={s.Statistics}>
        {title && <h2 className={s.title}>{title}</h2>}
        <ul className={s.info}>
        {stats.map(stat => (
            <Statistics
                key={stat.id}
                label={stat.label}
                percentage={stat.percentage}               
            />
        ))}
        </ul>
    </section>
    )
};
   

export default StatisticsList;
