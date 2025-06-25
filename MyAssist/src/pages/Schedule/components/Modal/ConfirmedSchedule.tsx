import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { ModalWrapper, ModalContent, ModalTitle, ModalText } from './styles';
import {Button, Text, Alert,Modal} from 'react-native';

interface ConfirmedScheduleProps {
  scheduleMShow: boolean;
  id: string
 }

export default function ConfirmedSchedule({scheduleMShow, id}: ConfirmedScheduleProps) {

  const navigation = useNavigation();

  return (
    <Modal visible={scheduleMShow} transparent>
      <ModalWrapper>
        <ModalContent>
            <ModalTitle>Ordem de serviço!</ModalTitle>
            <ModalText>{id}</ModalText>
            <Button title="Fechar" onPress={() => navigation.navigate('Home')} />
        </ModalContent>
      </ModalWrapper>
    </Modal>
  );
}
