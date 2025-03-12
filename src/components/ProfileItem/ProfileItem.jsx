import {
  Description,
  Avatar,
  Text,
  Stats,
  Stat,
  Label,
  Quantity,
  Card,
} from './ProfileItem.styled';

export const Profile = ({
  username,
  avatar,
  tag,
  location,
  followers,
  views,
  likes,
}) => (
  <Card>
    <Description>
      <Avatar src={avatar} alt="User avatar" />
      <Text>{username}</Text>
      <Text>{tag}</Text>
      <Text>{location}</Text>
    </Description>

    <Stats>
      <Stat>
        <Label>Followers</Label>
        <Quantity>{followers}</Quantity>
      </Stat>
      <Stat>
        <Label>Views</Label>
        <Quantity>{views}</Quantity>
      </Stat>
      <Stat>
        <Label>Likes</Label>
        <Quantity>{likes}</Quantity>
      </Stat>
    </Stats>
  </Card>
);
