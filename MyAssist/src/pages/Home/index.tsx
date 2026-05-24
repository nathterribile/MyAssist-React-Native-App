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
          <styles.navbarTitle testID="com.myassist:id/navbarTitle" accessible={true}>
            <Logo testID="com.myassist:id/logo" accessible={true} color="white"/> MyAssist</styles.navbarTitle>
          <styles.navbarLink testID="com.myassist:id/navbarLink" accessible={true} onPress={() => setLMShow(true)}>
            Login
          </styles.navbarLink>
        </styles.navbar>

        <ModalLogin testID="com.myassist:id/modalLogin" accessible={true} visible={loginModalVisible} setLMShow={setLMShow} />
        <styles.hero>
          <styles.heroTitle testID="com.myassist:id/heroTitle" accessible={true}>
            A melhor assistência técnica de São Paulo
          </styles.heroTitle>
          <styles.heroText testID="com.myassist:id/heroTextApresentacao" accessible={true}>
            Oferecemos assistência técnica especializada, com reparo com uso de
            peças originais e garantia de serviço. Contamos com profissionais qualificados e constantemente treinados.</styles.heroText>
          <styles.heroText testID="com.myassist:id/heroTextAgendamento" accessible={true}>Evite filas e faça um pré-agendamento antes de deslocar-se ao Centro de Serviço para realizar a Assistência Técnica de seu smartphone, tablet ou notebook.</styles.heroText>
          <styles.image testID="com.myassist:id/imageAssist" accessible={true} source={require('../../assets/images/Assist.png')} />
          <Button testID="com.myassist:id/maisInformacoesButton" accessible={true} title="Mais informações aqui" onPress={() => setAMShow(true)}/>
        </styles.hero>

        <ModalAtencao testID="com.myassist:id/modalAtencao" accessible={true} visible={attentionModalVisible} setAMShow={setAMShow} />

        <styles.services>
          <styles.servicesTitle testID="com.myassist:id/servicesTitle" accessible={true}>Serviços</styles.servicesTitle>
          <Cards />
        </styles.services>
      </ScrollView>
    </styles.Container>
  );
}
