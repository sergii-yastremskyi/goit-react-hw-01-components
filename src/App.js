
import './App.css';
import Profile from './Profile/Profile';
import user from './Profile/user.json';
import Statistical from './Statistical/Statistical.js';
import statisticalData from './Statistical/statistical-data.json';
import FriendList from './FriendList/FriendList.js';
import friends from './FriendList/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory.js';
import transactions from './TransactionHistory/transactions.json';
function App() {
  return (
    <div className='App'>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistical title='Upload stats' stats={statisticalData} />
      <FriendList friends={friends} />
       <TransactionHistory items={transactions} />;
    </div>
  );
}

export default App;
