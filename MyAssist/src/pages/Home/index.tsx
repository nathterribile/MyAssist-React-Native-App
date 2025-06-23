import React, { useState } from 'react';
import styles from './styles';
import {Button, ScrollView} from 'react-native';
import ModalLogin from './components/Modals/Login';
import ModalAtencao from './components/Modals/Atencao';
import Cards from './components/Cards/index';

export default function Home() {

  const [loginModalVisible, setLMShow] = useState(false);
  const [attentionModalVisible, setAMShow] = useState(false);

  return (
    <styles.Container>
    <ScrollView>
      <styles.navbar>
        <styles.navbarTitle>MyAssist</styles.navbarTitle>
        <styles.navbarLink onPress={() => setLMShow(true)}>Login</styles.navbarLink>
      </styles.navbar>

      <ModalLogin visible={loginModalVisible} setLMShow={setLMShow}/>
      <styles.hero>
        <styles.heroTitle>A melhor assistência técnica de São Paulo</styles.heroTitle>
        <styles.heroText>
          Oferecemos assistência técnica especializada, com reparo com uso de peças originais e garantia de serviço.
        </styles.heroText>
        <Button title="Mais informações aqui" onPress={() => setLMShow(true)} />
      </styles.hero>

      <ModalAtencao visible={attentionModalVisible} setAMShow={setAMShow}/>

      <styles.services>
        <styles.servicesTitle>Serviços</styles.servicesTitle>
        <Cards/>
      </styles.services>
    </ScrollView>
    </styles.Container>
  );
}
