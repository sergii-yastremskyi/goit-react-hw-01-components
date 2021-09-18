import PropTypes from 'prop-types';
import styles from './Profile.module.css';
export default function Profile({ name, tag, location, avatar, stats }) {
  return (
    <div className='profile'>
      <div className='description'>
        <img src={avatar} alt='Аватар пользователя' className={styles.avatar} />
        <p className='name'>{name}</p>
        <p className='tag'>@{tag}</p>
        <p className='location'>{location}</p>
      </div>
      <ul className={styles.stats}>
        <li className={styles.statItem}>
          <span className='label'>Followers </span>
          <span className='quantity'>{stats.followers}</span>
        </li>
        <li className={styles.statItem}>
          <span className='label'>Views </span>
          <span className='quantity'>{stats.views}</span>
        </li>
        <li className={styles.statItem}>
          <span className='label'>Likes </span>
          <span className='quantity'>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};