import css from './UploadStatistic.module.css';
import { StatisticPainting } from './StatisticPainting'
import PropTypes from 'prop-types'

export const UploadStatistic = ({ data, header }) => { 
    return (
        <section className={css.statisticContainer}>
            <div className={css.StatisticHeader}> {header && <h2> { header }</h2>}</div>
                <StatisticPainting data={data}/>      
        </section>
    )
}

UploadStatistic.propTypes = {
    header: PropTypes.string,
    data: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number,
        
    }))
}