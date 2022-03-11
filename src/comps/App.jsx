import Profile from 'comps/Profile/Profile';
import Statistics from 'comps/Statistics/Statistics';
import FriendList from 'comps/FriendList/FriendList';
import TransactionHistory from 'comps/TransactionHistory/TransactionHistory';
import user from 'data/user.json';
import stats from 'data/stats.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

export default function App() {
  return (
    <div>
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}    
      />
      <Statistics title="Upload stats" stats={stats} />
      <Statistics stats={stats} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>   
  );
};