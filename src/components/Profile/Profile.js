import defaultImagine from "../Profile/default.jpg";
import '../Profile/Profile.css';
import PropTypes from 'prop-types';
const Profile = ({ avatar = defaultImagine, username, tag, location, stats }) => {
    return (
        <div className="Profile">
            <div className="description">
                <img
                    src={avatar}
                    alt="User avatar"
                    width="200px"
                    className="avatar"
                />
                <div className="profileinfo">
                <p className="name">{username}</p>
                <p className="tag">@{tag}</p>
                <p className="location">{location}</p></div>
               
            </div>

            <ul className="stats">
                <li className="statsinfo">
                    <span class="label">Followers</span>
                    <span class="quantity"> {stats.followers}</span>
                </li>
                <li className="statsinfo">
                    <span className="label">Views</span>
                    <span className="quantity"> {stats.views}</span>
                </li>
                <li className="statsinfo">
                    <span className="label">Likes</span>
                    <span className="quantity"> {stats.likes}</span>
                </li>
            </ul>
        </div>
    );
};
Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
};

export default Profile;
