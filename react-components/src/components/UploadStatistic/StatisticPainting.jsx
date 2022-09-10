import css from './StatisticPainting.module.css'
import { randomColor } from './RandomColor'
export const StatisticPainting = ({ data }) => {
   
    return (
        <ul className={css.statList}>
            {data.map((item) => {
                const randomStyle = {};
                randomStyle.backgroundColor = `${randomColor()}`
            
                // console.log(randomStyle)
                return (
                    <li style={ randomStyle } key={item.id} className="item">
                        <span className={css.label} >{item.label}</span>
                        <span className={css.percentage}>{item.percentage}</span>
                    </li>
                )
            }
            )
            }

    
        </ul>
        
        )
        
}