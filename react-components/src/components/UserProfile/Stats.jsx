import './Stats.css';
import css from "./Stats.module.css"


export const Stats = ({ userProfile }) => {
    
    return (
       
      <ul className={css.stats}>
    <li>
      <span className="labelUser">Followers</span>
                <span className={css.quantity}>{ userProfile.stats.followers }</span>
    </li>
    <li>
          <span className={css.labelUser}>Views</span>
          <span className={css.quantity}>{ userProfile.stats.views}</span>
    </li>
    <li>
      <span className={css.labelUser}>Likes</span>
                <span className="quantity">{userProfile.stats.likes}</span>
    </li>
  </ul>
)
}
