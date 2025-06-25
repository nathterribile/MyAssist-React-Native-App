import styled from 'styled-components/native';

export const ModalWrapper = styled.View`
  flex: 1;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
  `;

export const ModalContent = styled.View`
  background-color: #fff;
  padding: 16px;
  border-radius: 8px;
  width: 80%;
`;

export const ModalTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 6px;
  text-align: center;
`;

export const ModalText = styled.Text`
  font-size: 16px;
  text-align: center;
  margin-vertical: 8px;
`;

export const SpaceLines = styled.Text`
  font-size: 2px;
  margin-vertical: 2px;
`;