import { ProfileContainer } from './UserProfile/UserProfile';
import { StatisticsContainer } from './Statistics/Statistics';
import { FriendsContainer } from './Friends/Friends';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { MainContainer } from 'App.styled.jsx';

import user from '../user';
import data from '../data';
import friends from '../friends';
import transactions from '../transactions';

export const App = () => {
  return (
    <MainContainer text="React homework template">
      <ProfileContainer user={user} />
      <StatisticsContainer data={data} />
      <FriendsContainer friends={friends} />
      <TransactionHistory items={transactions} />
    </MainContainer>
  );
};
