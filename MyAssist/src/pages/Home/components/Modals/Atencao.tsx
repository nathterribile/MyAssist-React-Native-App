import React from 'react';
import { ModalWrapper, ModalContent, ModalTitle, AtencaoText, SpaceLines } from './styles';
import {Alert, Modal, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface ModalAtencaoProps {
  visible: boolean;
  setAMShow: React.Dispatch<React.SetStateAction<boolean>>;

}

export default function ModalAtencao({visible, setAMShow}: ModalAtencaoProps) {

    const navigation = useNavigation();

  return (

    <Modal visible={visible} transparent>
    <ModalWrapper>
      <ModalContent>
        <ModalTitle>ATENÇÃO</ModalTitle>
        <AtencaoText>
          Pré-agendamento somente para smartphone, tablets e notebooks.
        </AtencaoText>
        <Button title="Agendar" onPress={() => navigation.navigate('Schedule')} />
        <SpaceLines/>
        <Button title="Fechar" onPress={() => setAMShow(false)} />
      </ModalContent>
    </ModalWrapper>
    </Modal>
  );
}
