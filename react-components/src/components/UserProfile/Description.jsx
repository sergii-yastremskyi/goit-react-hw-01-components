import css from './Description.module.css';

export const Description = ({ userProfile }) => {
    return (
       
    <div className={css.Description}>
        <img
                src={userProfile.avatar}
                alt="User avatar"
                className={css.avatar}
        />
            <p className={css.name}>{userProfile.username}</p>
            <p className={css.tag}>@{userProfile.tag}</p>
            <p className={css.location}>{userProfile.location}</p>
    </div>
)
}

