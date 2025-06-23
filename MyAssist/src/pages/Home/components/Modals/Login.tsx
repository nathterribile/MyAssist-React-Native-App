import React, { useState } from 'react';
import styles from './styles';
import {Button, Text, Alert} from 'react-native';

interface ModalLoginProps {
  visible: boolean;
  setLMShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ModalLogin({ visible, setLMShow }: ModalLoginProps) {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    fetch(`http://localhost:8080/usuario/login?usuario=${user}&senha=${password}`, {
      method: 'POST',
    })
      .then((response) => {
        if (response.ok) {
          Alert.alert('Login bem-sucedido', 'Você será redirecionado para a área administrativa.');
        } else {
          throw response;
        }
      })
      .catch((response) => {
        if (response.status === 400) {
          Alert.alert('Erro', 'Usuário ou senha incorretos!');
        } else {
          Alert.alert('Erro', 'Serviço indisponível!');
        }
        setUser('');
        setPassword('');
      });
  };


  return (
    <>
      <styles.modalContainer visible={visible} >
        <styles.modalTitle>Área de login - Funcionários</styles.modalTitle>
        <styles.modalContent>
          <Text>Usuário:</Text>
          <styles.input placeholder="Ex: user123456" value={user} onChangeText={setUser}/>
          <Text>Senha:</Text>
          <styles.input placeholder="Ex: suasenha123456" value={password} onChangeText={setPassword}/>
          <Button title="Acessar" onPress={handleLogin} />
          <Button title="Fechar" onPress={() => setLMShow(false)} />
        </styles.modalContent>
      </styles.modalContainer>
    </>
  );
}
