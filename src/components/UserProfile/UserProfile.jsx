import { Container } from './UserProfile.styled.jsx';
import { Profile } from '../ProfileItem/ProfileItem.jsx';

export const ProfileContainer = ({ user }) => {
  return (
    <Container>
      {user.map(({ username, avatar, location, tag, stats }) => (
        <Profile
          key={username}
          username={username}
          avatar={avatar}
          tag={tag}
          location={location}
          followers={stats.followers}
          views={stats.views}
          likes={stats.likes}
        ></Profile>
      ))}
    </Container>
  );
};
