
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';
export default function FriendList({ friends }) {
  return (
    <ul className={styles.item}>
      {friends.map((friend) => (
        <li key={friend.id} className={styles.item}>
          <span className={friend.isOnline ? styles.green : styles.red}></span>
          <img className={styles.avatar} src={friend.avatar} alt={friend.name} width='48' />
          <p className={styles.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}
FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
};