import './StatisticPainting.css'
import { randomColor } from './RandomColor'
export const StatisticPainting = ({ data }) => {
   
    return (
        <ul className="stat-list">
            {data.map((item) => {
                const randomStyle = {};
                randomStyle.backgroundColor = `${randomColor()}`
            
                console.log(randomStyle)
                return (
                    <li style={ randomStyle } key={item.id} className="item">
                        <span className='label' >{item.label}</span>
                        <span className='percentage'>{item.percentage}</span>
                    </li>
                )
            }
            )
            }

    
        </ul>
        
        )
        
}