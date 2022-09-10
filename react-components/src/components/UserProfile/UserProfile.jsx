import { Description } from './Description'
import { Stats } from './Stats'
import "./UserProfileStyles.css"
import css from "./UserProfileStyles.module.css"
import PropTypes from 'prop-types'

export const UserProfile = ({userProp}) => {
   
    return (
       
 <div className={css.profile}>
  <Description userProfile = {userProp} />
  <Stats userProfile = {userProp} />         
 
</div>
    )
}


UserProfile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
        folowers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number
    })
}
