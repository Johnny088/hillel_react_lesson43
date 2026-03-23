import styled from '@emotion/styled';

export const Image = styled.img`
  width: 200px;
  height: 200px;
`;
export const Button = styled.button`
  margin-bottom: 12px;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
  background-color: aquamarine;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;
