import defaultImagine from "../Profile/default.jpg";
import s from '../Profile/Profile.module.css';
import PropTypes from 'prop-types';
const Profile = ({ avatar = defaultImagine, username, tag, location, stats }) => {
    return (
        <div className={s.portfolio}>
            <div className={s.description}>
                <img 
                    src={avatar}
                    alt="User avatar"
                    width="200px"
                    className={s.avatar}
                />
                <div className={s.info}>
                <p className={s.name}>{username}</p>
                <p className={s.tag}>@{tag}</p>
                <p className={s.location}>{location}</p></div>
               
            </div>

            <ul className={s.stats}>
                <li className={s.statsinfo}>
                    <span className={s.label}>Followers</span>
                    <span className={s.quantity}> {stats.followers}</span>
                </li>
                <li className={s.statsinfo}>
                    <span className={s.label}>Views</span>
                    <span className={s.quantity}> {stats.views}</span>
                </li>
                <li className={s.statsinfo}>
                    <span className={s.label}>Likes</span>
                    <span className={s.quantity}> {stats.likes}</span>
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
