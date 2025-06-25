import React, {useState} from 'react';
import styles from './styles';
import {Button, ScrollView} from 'react-native';
import ModalLogin from './components/Modals/Login';
import ModalAtencao from './components/Modals/Atencao';
import Cards from './components/Cards/index';
import Logo from '../../assets/images/motherboard.svg';


export default function Home() {
  const [loginModalVisible, setLMShow] = useState(false);
  const [attentionModalVisible, setAMShow] = useState(false);

  return (
    <styles.Container>
      <ScrollView>
        <styles.navbar>
        <styles.navbarTitle><Logo color="white"/> MyAssist</styles.navbarTitle>
          <styles.navbarLink onPress={() => setLMShow(true)}>
            Login
          </styles.navbarLink>
        </styles.navbar>

        <ModalLogin visible={loginModalVisible} setLMShow={setLMShow} />
        <styles.hero>
          <styles.heroTitle>
            A melhor assistência técnica de São Paulo
          </styles.heroTitle>
          <styles.heroText>
            Oferecemos assistência técnica especializada, com reparo com uso de
            peças originais e garantia de serviço. Contamos com profissionais qualificados e constantemente treinados.</styles.heroText>
          <styles.heroText>Evite filas e faça um pré-agendamento antes de deslocar-se ao Centro de Serviço para realizar a Assistência Técnica de seu smartphone, tablet ou notebook.</styles.heroText>
          <styles.image source={require('../../assets/images/Assist.png')} />
          <Button title="Mais informações aqui" onPress={() => setAMShow(true)}/>
        </styles.hero>


        <ModalAtencao visible={attentionModalVisible} setAMShow={setAMShow} />

        <styles.services>
          <styles.servicesTitle>Serviços</styles.servicesTitle>
          <Cards />
        </styles.services>
      </ScrollView>
    </styles.Container>
  );
}
