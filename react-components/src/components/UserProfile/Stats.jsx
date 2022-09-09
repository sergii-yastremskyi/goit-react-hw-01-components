import './Stats.css';


export const Stats = ({ userProfile }) => {
    
    return (
       
    <ul className="stats">
    <li>
      <span className="labelUser">Followers</span>
                <span className="quantity">{ userProfile.stats.followers }</span>
    </li>
    <li>
      <span className="labelUser">Views</span>
      <span className="quantity">{ userProfile.stats.views}</span>
    </li>
    <li>
      <span className="labelUser">Likes</span>
                <span className="quantity">{userProfile.stats.likes}</span>
    </li>
  </ul>
)
}
