import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import getRandomHexColor from 'js/getRandomHexColor';

function StatisticsList({ title='', stats }) {
    return (
        <section className={s.statistics}>
            {title && <h2 className={s.title}>{title}</h2>}
            <ul className={s.list}>
                {stats.map(({id, label, percentage}) => (                   
                    <li key={id} style = {{ backgroundColor: getRandomHexColor() }} className={s.item}>
                        <span className={s.label}>{label}</span>
                        <span className={s.percentage}>{percentage}%</span> 
                    </li>
                ))}
            </ul>
        </section>
    )
}

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,  
    }),
  ),
};

export default StatisticsList;