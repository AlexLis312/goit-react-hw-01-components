import { StatList, Item, Label, Percentage } from './StatItem.styled';
import colorPick from '../../colorPicker';
import colorList from '../../colorList';

export const StatItem = ({ label, percentage }) => {
  return (
    <StatList>
      <Item style={{ backgroundColor: colorPick(colorList) }}>
        <Label>{label}</Label>
        <Percentage>{percentage}%</Percentage>
      </Item>
    </StatList>
  );
};
