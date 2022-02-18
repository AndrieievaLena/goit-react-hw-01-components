import defaultImagine from "./default.jpg"
import PropTypes from "prop-types";
import s from "./Friends.module.css"
const FriendListItem = ({ avatar = defaultImagine, name, isOnline }) => {
    return (
     
           <li className={s.List}>
                <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
               <div className ={s.section}>
               <span className={ isOnline ? s.Online : s.Offline}></span>
                <p className={s.name}>{name}</p>
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