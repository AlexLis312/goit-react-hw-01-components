import { Tbody, Tr, Td } from './TransactionRow.styled';

export const TransactionItem = ({ type, amount, currency }) => {
  return (
    <Tbody>
      <Tr>
        <Td>{type}</Td>
        <Td>{amount}</Td>
        <Td>{currency}</Td>
      </Tr>
    </Tbody>
  );
};
