import { Item, Status, Avatar, Name } from './FriendItem.styled';

export const FriendItem = ({ isOnline, avatar, name }) => {
  return (
    <Item>
      <Status isOnline={isOnline} />
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
};
