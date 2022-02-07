import Profile from "./components/Profile";
import user from "../src/json/user.json";
import datas from "../src/json/data.json";
import StatisticsList from "./components/StatisticsList";
import FriendListItem from "./components/Friends";
import friendInfo from "../src/json/friends.json";
import TransactionHistory from "./components/Transaction";
import transactions from "../src/json/transactions.json";

const App = () => {
  return (
    <div>
        <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
        />
      <StatisticsList stats={datas} />
      <FriendListItem friends={friendInfo} />
      <TransactionHistory items={transactions} />
   </div>
      
    );
   
}
export default App;