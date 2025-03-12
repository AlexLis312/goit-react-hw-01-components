import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-bottom: 8px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;
  &:hover {
    background-color: #f1f1f1;
  }
`;
export const Status = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${props => (props.isOnline ? '#4caf50' : '#f44336')};
`;
export const Avatar = styled.img`
  border-radius: 50%;
  margin-right: 10px;
  border: 2px solid #ddd;
`;
export const Name = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;
