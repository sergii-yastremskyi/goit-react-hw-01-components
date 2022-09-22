import user from './components/db/user';
import { UserProfile } from './components/UserProfile/UserProfile.jsx'
import './App.css';
import data from './components/db/data'
import { UploadStatistic } from './components/UploadStatistic/UploadStatistic'
import { FriendList} from './components/FriendList/FriendList'
import friends from './components/db/friends'
import transactions from './components/db/transactions.json'
import { TransactionsHistory } from './components/TransactionsHistory/TransactionsHistory'

function App() {
  return (
    <div>
      <UserProfile userProp={user} />
      <UploadStatistic data={data} header='Upload Statistics' />
      <FriendList friendsData={friends} />
      <TransactionsHistory transactions={transactions} />
    </div>
  );
}

export default App;
