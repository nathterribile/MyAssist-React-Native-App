import React, {useState} from 'react';
import { ModalWrapper, ModalContent, ModalTitle, LoginText, SpaceLines, Input } from './styles';
import {Button, Text, Alert,Modal} from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface ModalLoginProps {
  visible: boolean;
  setLMShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Login({visible, setLMShow}: ModalLoginProps) {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
        console.log(user,password)
        const response = await fetch(`https://myassist-backend-cahyf9d8chcwcxd0.brazilsouth-01.azurewebsites.net/usuario/login?usuario=${user}&senha=${password}`,{
            method:"POST"
        })

        if (!response.ok) {

            throw new Error("Erro ao logar");
        }

        navigation.navigate("Admin");
    } catch (error: any) {

      console.log(error)
        if (error.response?.status === 400) {
          Alert.alert('Erro', 'Usuário ou senha incorretos!');
        } else {
          Alert.alert('Erro', 'Serviço indisponível!');
        }
        setUser('');
        setPassword('');
    };
  };

  return (
    <Modal visible={visible} transparent>
      <ModalWrapper>
        <ModalContent>
            <ModalTitle>Área de login - Funcionários</ModalTitle>
            <LoginText>Usuário:</LoginText>
          <Input
            placeholderTextColor= "gray" placeholder="Ex: user123456"
            value={user}
            onChangeText={setUser}
          />
          <LoginText>Senha:</LoginText>
          <Input
            placeholderTextColor= "gray"
            placeholder="Ex: suasenha123456"
            value={password}
            onChangeText={setPassword}
          />
          <Button title="Acessar" onPress={handleLogin} />
          <SpaceLines/>
          <Button title="Fechar" onPress={() => setLMShow(false)} />
        </ModalContent>
      </ModalWrapper>
    </Modal>
  );
}
