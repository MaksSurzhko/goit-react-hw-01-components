import PropTypes from 'prop-types';
 
import ucss from "../users/user.module.css"

 const Profile = ({username, tag, location, avatar, stats, followers, views, likes }) => {
   return (
     <div className={ucss.profile}>
    <div className= {ucss.description}>
      <img
        src={avatar}
        alt="User avatar"
        className={ucss.avatar}
      />
      <p className={ucss.name}>{username}</p>
      <p className={ucss.tag}>@{tag}</p>
      <p className={ucss.location}>{location}</p>
    </div>
  
    <ul className={ucss.stats}>
      <li className = {ucss.list}>
        <span className={ucss.label}>Followers</span>
        <span className={ucss.quantity}>{stats.followers}</span>
      </li>
      <li className = {ucss.list}>
        <span className={ucss.label}>Views</span>
        <span className={ucss.quantity}>{stats.views}</span>
      </li>
      <li className = {ucss.list}>
        <span className={ucss.label}>Likes</span>
        <span className={ucss.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
    );
  };
export default Profile
  
Profile.propTypes = {
    username:PropTypes.string,
    tag:PropTypes.string,
    location:PropTypes.string,
    avatar:PropTypes.string,  
    followers:PropTypes.string,
    views:PropTypes.string,
    likes:PropTypes.string,
  }