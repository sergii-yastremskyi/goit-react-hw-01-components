import './Description.css';
export const Description = ({ userProfile }) => {
    return (
       
    <div className="Description">
        <img
            src={userProfile.avatar}
            alt="User avatar"
            className="avatar"
        />
        <p className="name">{userProfile.username}</p>
        <p className="tag">@{userProfile.tag}</p>
        <p className="location">{userProfile.location}</p>
    </div>
)
}
