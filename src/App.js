import Profile from "./components/Profile/Profile";
import user from "../src/json/user.json";
import datas from "../src/json/data.json";
import StatisticsList from "./components/Statistics/StatisticsList";
import FriendListItem from "./components/Friends/Friends";
import friendInfo from "../src/json/friends.json";
import TransactionHistory from "./components/Transaction/Transaction";
import transactions from "../src/json/transactions.json";
import s from "./index.module.css";
const App = () => {
  return (
    <div>
      <div className={s.profile}>
      <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
        />
      <StatisticsList title="Upload stats" stats={datas} />
      
      </div>  
      <div className={s.section}>
      <FriendListItem friends={friendInfo} />
      <TransactionHistory items={transactions} />
      </div>
      
   </div>
      
    );
   
}
export default App;