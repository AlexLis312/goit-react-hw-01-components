import { Statistics } from './Statistics.styled';
import { StatisticsTitle } from 'components/Title/Title';
import { StatItem } from 'components/StatItem/StatItem';

export const StatisticsContainer = ({ data }) => {
  return (
    <Statistics>
      <StatisticsTitle />
      {data.map(({ id, label, percentage }) => (
        <StatItem key={id} label={label} percentage={percentage}></StatItem>
      ))}
    </Statistics>
  );
};
