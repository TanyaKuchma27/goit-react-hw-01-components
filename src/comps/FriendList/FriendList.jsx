import FriendListItem from 'comps/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import s from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={s.list}>
      {friends.map(({id, name, avatar, isOnline}) => (
        <li key={id} className={s.item}>
          <FriendListItem
            name={name}
            avatar={avatar}
            isOnline={isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendList;