import user from '../data/user.json';
import stats from '../data/stats.json';
import Profile from './Profile/Profile';
import StatisticsList from './StatisticsList/StatisticsList';

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
      <StatisticsList title="Upload stats" stats={stats} />
      <StatisticsList stats={stats} />
    </div>   
  );
};
