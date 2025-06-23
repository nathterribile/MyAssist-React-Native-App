import styled from 'styled-components/native';

const ModalWrapper = styled.ModalWrapper`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const modalContent = styled.modalContent`
  background-color: #fff;
  padding: 16px;
  border-radius: 8px;
  width: 80%;
`;

const modalTitle = styled.modalTitle`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  text-align: center;
`;

const input = styled.input`
  border-width: 1px;
  border-color: #ccc;
  padding: 8px;
  margin-bottom: 16px;
  border-radius: 4px;
  width: 100%;
`;

const styles = {
  ModalWrapper, modalContent, modalTitle, input,
};

export default styles;
