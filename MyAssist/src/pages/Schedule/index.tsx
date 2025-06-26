import { useState } from 'react';
import { useEffect } from "react";
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../assets/images/motherboard.svg';
import {Button, ScrollView, Alert} from 'react-native';
import ConfirmedSchedule from './components/Modal/ConfirmedSchedule';
import Devices from './components/Selects/Devices';
import InputDate from './components/Selects/InputDate';
import 'moment/locale/pt-br';
import Moment from 'moment';


export default function Schedule () {

  const navigation = useNavigation();

  const [owner, setOwner] = useState('');

  const [device, setDevice] = useState('');

  const [date, setDate] = useState(new Date());
  Moment.locale('pt-br');
  const selectedDateFormatted = Moment(date).format('YYYY-MM-DD');


  const [problem, setProblem] = useState('');

  const form = {
      proprietario: owner,
      tipoEquipamento: device,
      entradaLab: selectedDateFormatted,
      defeito: problem,
      statusConcerto: 'agendamento',
      observacoes: "",

  };

  const [scheduleMShow, setSMShow] = useState(false);

  const [id, setId] = useState('');

  const agendar = async () => {
      console.log(form);

        try {
          const response = await fetch('https://myassist-backend-cahyf9d8chcwcxd0.brazilsouth-01.azurewebsites.net/os', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': "*",
            },
            body: JSON.stringify(form)
          });
            if (!response.ok) {
                throw new Error(`HTTP Error ${response.status}`);
              }
          const body = await response.json();
          console.log(body);
          setId('Numero de agendamento: ' + body.id);
        } catch (error: any) {
              console.log(error);
          if (error.response?.status === 400) {
            Alert.alert('Erro', 'Campo não informado!');
          } else {
            Alert.alert('Erro', 'Serviço indisponível!');
          }
        }
  };

  useEffect(() => {
      if (id) {
          setSMShow(true);
        }
    }, [id]);


  return (
      <styles.Container>
      <ScrollView>
        <styles.navbar>
            <styles.navbar1>
                <styles.navbarTitle><Logo color="white"/> MyAssist</styles.navbarTitle>
                <styles.navbarTitle2>Pré-agendamento</styles.navbarTitle2>
            </styles.navbar1>
            <styles.navbar2>
                <styles.navbarLink onPress={() => navigation.navigate('Home')}> Voltar </styles.navbarLink>
            </styles.navbar2>
        </styles.navbar>
        <styles.hero>
            <styles.heroTitle>
              Informações necessárias
            </styles.heroTitle>
            <styles.heroText>Proprietário</styles.heroText>
            <styles.heroInput maxLength={30}  placeholder=" Ex: user123456" value={owner} onChangeText={(itemValue) => setOwner(itemValue)}/>
            <Devices device={device} setDevice={setDevice}/>
            <styles.heroText>Data desejada</styles.heroText>
            <InputDate date={date} setDate={setDate}/>
            <styles.heroText>Defeito</styles.heroText>
            <styles.heroInput2 multiline={true} maxLength={200} placeholderTextColor= "gray" placeholder=" Ex: O defeito apresentado..." value={problem} onChangeText={(itemValue) => setProblem(itemValue)}/>
            <styles.buttonView>
            <styles.button title="Agendar" onPress={agendar}/>
            </styles.buttonView>
            <ConfirmedSchedule scheduleMShow={scheduleMShow} id={id}/>
            </styles.hero>
      </ScrollView>
      </styles.Container>

  );
}
