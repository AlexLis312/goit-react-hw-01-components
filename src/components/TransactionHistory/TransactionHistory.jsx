import { TransactionTable, Thead, Th } from './TransactionHistory.styled';
import { TransactionItem } from '../TransactionRow/TransactionRow';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <Thead>
        <tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </tr>
      </Thead>

      {items.map(({ id, type, amount, currency }) => (
        <TransactionItem
          key={id}
          type={type}
          amount={amount}
          currency={currency}
        />
      ))}
    </TransactionTable>
  );
};
