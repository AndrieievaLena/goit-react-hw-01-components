import defaultImagine from "./default.jpg"
import PropTypes from "prop-types";
import "./Friends.css"
const FriendListItem = ({ avatar = defaultImagine, name, isOnline }) => {
    return (
     
           <li className="FriendListItem">
                <img className="friendsavatar" src={avatar} alt="User avatar" width="48" />
               <div className ="friendssection">
               <span className="status">{isOnline ? 'Online' : 'Offline'}</span>
                <p className="friendsname">{name}</p>
               </div> 
            </li>
    );
};

FriendListItem.protoTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.string.isRequired,
};
export default FriendListItem;