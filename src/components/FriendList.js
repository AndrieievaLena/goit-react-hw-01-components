import defaultImagine from "../imagine/default.jpg"
import PropTypes from "prop-types";
const FriendListItem = ({ avatar = defaultImagine, name, isOnline }) => {
    return (
     
           <li class="item">
                <span class="status">{isOnline ? 'Online' : 'Offline'}</span>
                <img class="avatar" src={avatar} alt="User avatar" width="48" />
                <p class="name">{name}</p>
            </li>
    );
};

FriendListItem.protoTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.string.isRequired,
};
export default FriendListItem;