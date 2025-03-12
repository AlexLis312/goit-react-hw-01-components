import { Friends, FriendsList } from './Friends.styled';
import { FriendItem } from '../FriendItem/FriendItem';

export const FriendsContainer = ({ friends }) => {
  return (
    <Friends>
      <FriendsList>
        {friends.map(({ id, isOnline, avatar, name }) => (
          <FriendItem
            key={id}
            name={name}
            isOnline={isOnline}
            avatar={avatar}
          />
        ))}
      </FriendsList>
    </Friends>
  );
};
