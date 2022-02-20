import user from 'data/user.json';
import stats from 'data/stats.json';
import Profile from 'comps/Profile/Profile';
import Statistics from 'comps/Statistics/Statistics';

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
    </div>   
  );
};
