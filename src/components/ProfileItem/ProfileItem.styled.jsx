import styled from '@emotion/styled';

export const Card = styled.div`
  width: 300px;
  margin: 0 auto;
  background-color: rgb(211, 218, 226);
  border-radius: 10px;
  text-align: center;
  padding: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;
export const Description = styled.div`
  margin-bottom: 20px;
`;
export const Avatar = styled.img`
  background-color: #f3f6f9;
  width: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
`;
export const Text = styled.p`
  color: gray;
  font-size: 16px;
`;
export const Stats = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  padding: 0;
  margin: 0;
`;
export const Stat = styled.li`
  display: flex;
  flex-direction: column;
`;
export const Label = styled.span`
  color: gray;
  font-size: 14px;
`;
export const Quantity = styled.span`
  font-size: 16px;
  font-weight: bold;
`;
