import user from 'data/user.json';
import stats from 'data/stats.json';
import friends from 'data/friends.json';
import Profile from 'comps/Profile/Profile';
import Statistics from 'comps/Statistics/Statistics';
import FriendList from 'comps/FriendList/FriendList';

export default function App() {
  return (
    <div>
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={stats} />
      <Statistics stats={stats} />
      <FriendList friends={friends} />
    </div>   
  );
};