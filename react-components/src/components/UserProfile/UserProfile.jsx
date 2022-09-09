import { Description } from './Description'
import { Stats } from './Stats'
import "./UserProfileStyles.css"
export const UserProfile = ({userProp}) => {
    return (
       
 <div className="profile">
  <Description userProfile = {userProp} />
  <Stats userProfile = {userProp} />         
 
</div>
    )
}
