import React, {useState} from 'react';
import { ModalWrapper, ModalContent, ModalTitle, ModalText } from './styles';
import {Button, Text, Alert,Modal} from 'react-native';

interface AlterOSProps {
  alterOSMShow: boolean;
  setAlterOSMShow: React.Dispatch<React.SetStateAction<boolean>>
 }

export default function AlterOS({alterOSMShow, setAlterOSMShow}: AlterOSProps) {


  return (
    <Modal visible={alterOSMShow} transparent>
      <ModalWrapper>
        <ModalContent>
            <ModalText>Prencha os campos e clique no botao <ModalTitle>ALTERAR AGORA</ModalTitle> para modificar a ordem de serviço selecionada!</ModalText>
            <Button title="Fechar" onPress={() => setAlterOSMShow(false)} />
        </ModalContent>
      </ModalWrapper>
    </Modal>
  );
}
