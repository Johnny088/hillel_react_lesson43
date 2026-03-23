import styled from '@emotion/styled';

export const ContainerDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const ModalDiv = styled.div`
  margin-top: 60px;
  width: 60vw;
  min-width: 400px;
  max-width: 800px;
  height: 80vh;
  min-height: 300px;
  border: 1px solid black;
  border-radius: 8px;
  position: relative;
  text-align: center;
  background-color: rgba(72, 77, 102, 0.9);
  color: white;
`;
export const Image = styled.img`
  width: 300px;
  height: 300px;
`;
export const Button = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
  background-color: rgb(196, 36, 36);
  transition: transform 0.3s ease-in-out;
  color: white;
  &:hover {
    transform: scale(1.2);
  }
`;
