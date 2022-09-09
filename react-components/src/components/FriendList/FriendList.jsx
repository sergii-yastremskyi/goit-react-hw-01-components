import './FriendList.css'
import PropTypes from 'prop-types'
export const FriendList = ({ friendsData }) => { 
    
    return (
        <div className="friendsListContainer">
            <ul className='FriendList'>
               
                {friendsData.map((friend) => {
                    
                    return (
                        <li key={friend.id} className="FriendListItem">
                            <span className={`FriendStatus ${friend.isOnline ? 'Online' : 'Offline'}`} ></span>
                            <img className="FriendAvatar" src={friend.avatar} alt="User avatar" width="48" />
                            <p className="FriendName">{friend.name}</p>
                        </li>
                        )
                        }
                    )

                }
                
            </ul>
        </div>
    )
}

FriendList.propTypes = {
        friendsData: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string,
        })
    )

}