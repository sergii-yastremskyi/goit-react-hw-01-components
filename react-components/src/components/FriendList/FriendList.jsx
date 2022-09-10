import css from './FriendList.module.css'
import PropTypes from 'prop-types'
export const FriendList = ({ friendsData }) => { 
    
    return (
        <div className={css.friendsListContainer}>
            <ul className={css.FriendList}>
               
                {friendsData.map((friend) => {
                    
                    return (
                        <li key={friend.id} className={css.FriendListItem}>
                            <span className={`${css.FriendStatus} ${friend.isOnline ? css.Online : css.Offline}`} ></span>
                            <img className={css.FriendAvatar} src={friend.avatar} alt="User avatar" width="48" />
                            <p className={css.FriendName}>{friend.name}</p>
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