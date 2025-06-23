import React from 'react';
import styles from './styles';
import {Button, Text, Alert} from 'react-native';

interface ModalAtencaoProps {
  visible: boolean;
  setAMShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ModalAtencao({ visible, setAMShow }: ModalAtencaoProps) {

  const handleSchedule = () => {
    Alert.alert('Agendamento', 'Você será redirecionado para a página de agendamento.');
  };

  return (
      <styles.modalContainer visible={visible} >
          <styles.modalContent>
            <styles.modalTitle>ATENÇÃO</styles.modalTitle>
            <Text>Pré-agendamento somente para smartphone, tablets e notebooks.</Text>
            <Button title="Agendar" onPress={handleSchedule} />
            <Button title="Fechar" onPress={() => setAMShow(false)} />
          </styles.modalContent>
        </styles.modalContainer>
  );
}
