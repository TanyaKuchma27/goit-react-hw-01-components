import Statistics from '../Statistics/Statistics';
import PropTypes from 'prop-types';
import s from './StatisticsList.module.css';
import getRandomHexColor from '../../js/getRandomHexColor';

function StatisticsList({ title='', stats }) {
    return (
        <section className={s.statistics}>
            {title && <h2 className={s.title}>{title}</h2>}
            <ul className={s.list}>
                {stats.map(item => (                   
                    <li key={item.id} style = {{ backgroundColor: getRandomHexColor() }}>
                        <Statistics
                            label={item.label}
                            percentage={item.percentage}            
                        />
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
    }),
  ),
};

export default StatisticsList;