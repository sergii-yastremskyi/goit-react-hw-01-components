import './UploadStatistic.css';
import { StatisticPainting } from './StatisticPainting'

export const UploadStatistic = ({ data, header }) => { 
    return (
        <section className="statisticContainer">
            <div className='StatisticHeader'><h2>{ header}</h2></div>
                <StatisticPainting data={data}/>     
        </section>
    )
}