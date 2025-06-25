import { useState } from 'react';
import { useEffect } from "react";
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../assets/images/motherboard.svg';
import { Picker } from '@react-native-picker/picker';
import {Text, ScrollView, Alert, FlatList, View} from 'react-native';
import InputEnterDate from './components/Selects/InputEnterDate';
import InputDeliveryDate from './components/Selects/InputDeliveryDate';
import AlterOS from './components/Modal/AlterOS';
import Moment from 'moment';
import { LogBox } from 'react-native';


export default function Admin() {

  LogBox.ignoreLogs(['VirtualizedLists should never be nested']);


  const [alterOSMShow, setAlterOSMShow] = useState(false);

  const navigation = useNavigation();

  const [owner, setOwner] = useState('');

  const [device, setDevice] = useState('');

  const [enterDate, setEnterDate] = useState(new Date());
  Moment.locale('br');
  const selectedEnterDateFormatted = Moment(enterDate).format('YYYY-MM-DD');

  const [problem, setProblem] = useState('');

  const [deliveryDate, setDeliveryDate] = useState(new Date());
  const selectedDeliveryDateFormatted = Moment(deliveryDate).format('YYYY-MM-DD');

  const [status, setStatus] = useState('');

  const [obs, setObs] = useState('');

  useEffect(() => {
  }, [alterOSMShow]);

  const [inputBusca, setInputBusca] = useState();

  const [id, setId] = useState();


  const [idData, setIdData] = useState();

  const [tableData, setTableData] = useState([]);

  const TabelaInsert = ({ tableData }) => {

    return (
        <FlatList
          data={tableData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <styles.tableRow>
              <styles.tableRowCell><Text>{String(item.id)}</Text></styles.tableRowCell>
              <styles.tableRowCell><Text>{String(item.proprietario)}</Text></styles.tableRowCell>
              <styles.tableRowCell><Text>{String(item.tipoEquipamento)}</Text></styles.tableRowCell>
              <styles.tableRowCell><Text>{String(item.entradaLab)}</Text></styles.tableRowCell>
              <styles.tableRowCell><Text>{String(item.defeito)}</Text></styles.tableRowCell>
              <styles.tableRowCell><Text>{String(item.previsaoEntrega)}</Text></styles.tableRowCell>
              <styles.tableRowCell><Text>{String(item.statusConcerto)}</Text></styles.tableRowCell>
              <styles.tableRowCell><Text>{String(item.observacoes)}</Text></styles.tableRowCell>
              <styles.tableRowCellAlter onPress={() => {
                                          setAlterOSMShow(true);
                                          setCadastrateButton("none");
                                          setIdData(item.id);
                                          setIsVisible(true);
                                          setOwner(item.proprietario);
                                          setDevice(item.tipoEquipamento);
                                          setEnterDate(new Date(item.entradaLab));
                                          setProblem(item.defeito);
                                          setDeliveryDate(new Date(item.previsaoEntrega));
                                          setStatus(item.statusConcerto)
                                          setObs(item.observacoes);
                                        }}>Alterar</styles.tableRowCellAlter>
              </styles.tableRow>
          )}
        />
    );
  };

  const formData = {
                    proprietario: owner,
                    tipoEquipamento: device,
                    entradaLab: selectedEnterDateFormatted,
                    defeito: problem,
                    previsaoEntrega: selectedDeliveryDateFormatted,
                    statusConcerto: status,
                    observacoes: obs
            };



  const [cadastrateButton, setCadastrateButton] = useState("isVisible");

  const cadastrar = async () => {


          try {
            const response = await fetch('https://myassist-backend-cahyf9d8chcwcxd0.brazilsouth-01.azurewebsites.net/os', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData)
            });

            const body = await response.json();
            setTableData([body]);
            setOwner("");
            setDevice("");
            setEnterDate(new Date());
            setStatus("")
            setProblem("");
            setDeliveryDate(new Date());
            setObs("");

          } catch (error: any) {
            if (error.response?.status === 400) {
              Alert.alert('Erro', 'Campo não informado!');
            } else {
              Alert.alert('Erro', 'Serviço indisponível!');
            }
          }
    };


  const getAll = async () => {
    try {
      const response = await fetch('https://myassist-backend-cahyf9d8chcwcxd0.brazilsouth-01.azurewebsites.net/os' , { method: "GET" });

      const body = await response.json();

      if (body.length > 0) {
        setTableData(body.slice(-10));
      }
    } catch (error: any) {
        if (error.response?.status === 400) {
          Alert.alert('Erro', 'Usuário ou senha incorretos!');
        } else {
          Alert.alert('Erro', 'Serviço indisponível!');

        }
    }
  };

  const get = async (inputBusca) => {
      try {
        const response = await fetch(`https://myassist-backend-cahyf9d8chcwcxd0.brazilsouth-01.azurewebsites.net/os/${inputBusca}`, { method: "GET" });

        const body = await response.json();


          setTableData([body]);

      } catch (error: any) {
            if (error.response?.status === 400) {
              Alert.alert('Erro', 'Usuário ou senha incorretos!');
            } else {
              Alert.alert('Erro', 'Serviço indisponível!');
            }
      }
    };

    const buscar = () =>{

        if (inputBusca == 0) {
            getAll();
        }else if (inputBusca > 0) {
            get(inputBusca);
        }else if(undefined == ""){
            setInputBusca("");
        }else{
            setInputBusca("");
        }
    }

    const put = async (id) => {
          try {

              console.log(id);
              console.log(formData);
            const response = await fetch(`https://myassist-backend-cahyf9d8chcwcxd0.brazilsouth-01.azurewebsites.net/os/${id}`, {
               method: 'PUT',
               headers: {
                 Accept: 'application/json',
                 'Content-Type': 'application/json',
               },
               body: JSON.stringify(formData)
            }
            );

            const body = await response.json();
            console.log(body);
            setTableData([body]);
            setOwner("");
            setDevice("");
            setEnterDate(new Date());
            setStatus("");
            setProblem("");
            setDeliveryDate(new Date());
            setObs("");
            setIsVisible(false);
            setCadastrateButton("isVisible");
            setInputBusca("");

          }catch (error: any) {
            if (error.response?.status === 400) {
              Alert.alert('Erro', 'Campo não informado!');
            } else {
                console.log(error);
              Alert.alert('Erro', 'Serviço indisponível!');
            }
          }
    };



   const [isVisible , setIsVisible] = useState(false);

   const AlterarAgora = () => {

         useEffect(() => {
         }, [idData]);

           return (
               <styles.hiddenButtonView style={{ display: isVisible ? "flex" : "none" }}>
                   <styles.button title="Alterar agora"
                   onPress={() => {put(idData)}}
               />
               <styles.button title="Cancelar" onPress={() => navigation.reset({
                   index: 0,
                   routes: [{ name: 'Admin' }],
               }) }/>
               </styles.hiddenButtonView>
   )}



  return (
      <styles.Container>
      <ScrollView>
        <styles.navbar>
            <styles.navbar1>
                <styles.navbarTitle> MyAssist</styles.navbarTitle>
            </styles.navbar1>
            <styles.navbar1>
                <styles.headerImage source={require('../../assets/images/user.png')}/>
                <styles.navbar2>
                    <styles.navbarTitle2>Olá, funcionário!</styles.navbarTitle2>
                    <styles.navbarLink onPress={() => navigation.navigate('Home')}> Finalizar sessão </styles.navbarLink>
                </styles.navbar2>
            </styles.navbar1>
        </styles.navbar>
        <styles.hero>
            <styles.heroTitle>Cadastrar o equipamento</styles.heroTitle>
            <styles.heroText>Proprietário</styles.heroText>
            <styles.heroInput placeholderTextColor= "gray" maxLength={30} placeholder=" Ex: user123456" value={owner} onChangeText={(itemValue) => setOwner(itemValue)}/>
            <styles.heroText>Tipo de equipamento</styles.heroText>
                <styles.SelectBox>
                    <Picker itemStyle={{color:'white'}} mode="dropdown" selectedValue={device} onValueChange={(itemValue) => setDevice(itemValue)}>
                      <Picker.Item  color="gray" label=' Selecione o equipamento' value='0' />
                       <Picker.Item  color="black" label="Geladeira" value="Geladeira" />
                       <Picker.Item  color="black" label="Ar condicionado" value="Ar condicionado" />
                       <Picker.Item  color="black" label="Microondas" value="Microondas" />
                       <Picker.Item  color="black" label="Adega" value="Adega" />
                       <Picker.Item  color="black" label="Secadora" value="Secadora" />
                       <Picker.Item  color="black" label="Caixa de som" value="Caixa de som" />
                       <Picker.Item  color="black" label="Smart TV" value="Smart TV" />
                       <Picker.Item  color="black" label="Fone de ouvido" value="Fone de ouvido" />
                       <Picker.Item  color="black" label="tablet" value="tablet" />
                       <Picker.Item  color="black" label="smartphone" value="smartphone" />
                    </Picker>
                </styles.SelectBox>
            <styles.heroText>Entrada laboratório</styles.heroText>
            <InputEnterDate enterDate={enterDate} setEnterDate={setEnterDate}/>
            <styles.heroText>Defeito</styles.heroText>
            <styles.heroInput2 placeholderTextColor= "gray" multiline={true} maxLength={200} placeholder=" Ex: O defeito apresentado..." value={problem} onChangeText={(itemValue) => setProblem(itemValue)}/>
            <styles.heroText>Previsão de Entrega</styles.heroText>
            <InputDeliveryDate deliveryDate={deliveryDate} setDeliveryDate={setDeliveryDate}/>
            <styles.heroText>Status do conserto</styles.heroText>
                <styles.SelectBox>
                    <Picker mode="dropdown" selectedValue={status} onValueChange={(itemValue) => setStatus(itemValue)}>
                      <Picker.Item color="gray" label='Selecione o status' value='Selecione o status' />
                       <Picker.Item  color="black" label="Aguardando aprovação" value="Aguardando aprovação" />
                       <Picker.Item  color="black" label="Aguardando orçamento" value="Aguardando orçamento" />
                       <Picker.Item  color="black" label="Em conserto" value="Em conserto" />
                       <Picker.Item  color="black" label="Finalizado" value="Finalizado" />
                      </Picker>
                </styles.SelectBox>
            <styles.heroText>Observações</styles.heroText>
            <styles.heroInput2 placeholderTextColor= "gray" multiline={true} maxLength={200} placeholder=" Ex: O equipamento..." value={obs} onChangeText={(itemValue) => setObs(itemValue)}/>
            <styles.buttonView display={cadastrateButton}>
                <styles.button  title="Cadastrar equipamento" onPress={cadastrar}/>
            </styles.buttonView>
            <AlterarAgora/>
            </styles.hero>
            <styles.hero2>
                <styles.heroTitle>Realizar Busca</styles.heroTitle>
                <styles.buttonSearchView>
                    <styles.heroInput3 placeholderTextColor= "gray" maxLength={10} placeholder=" Ex: Buscar aparelho por id" value={inputBusca} onChangeText={(itemValue) => setInputBusca(itemValue)}></styles.heroInput3>
                    <styles.buttonView2>
                        <styles.button title="Buscar"  onPress={buscar}/>
                    </styles.buttonView2>
                </styles.buttonSearchView>
                <styles.heroTitle2>Resultado da Busca</styles.heroTitle2>
                <ScrollView horizontal>
                    <ScrollView nestedScrollEnabled={true}>
                    <styles.tableView>
                        <styles.tableHeader>
                            <styles.tableHeaderCell><Text>Código</Text></styles.tableHeaderCell>
                            <styles.tableHeaderCell><Text>Proprietário</Text></styles.tableHeaderCell>
                            <styles.tableHeaderCell><Text>Equipamento</Text></styles.tableHeaderCell>
                            <styles.tableHeaderCell><Text>Entrada</Text></styles.tableHeaderCell>
                            <styles.tableHeaderCell><Text>Defeito</Text></styles.tableHeaderCell>
                            <styles.tableHeaderCell><Text>Entrega</Text></styles.tableHeaderCell>
                            <styles.tableHeaderCell><Text>Status</Text></styles.tableHeaderCell>
                            <styles.tableHeaderCell><Text>Observações</Text></styles.tableHeaderCell>
                            <styles.tableHeaderCell><Text>Sistema</Text></styles.tableHeaderCell>
                        </styles.tableHeader>
                            {(tableData != [] ||(inputBusca >=0 && inputBusca != "")) && <TabelaInsert tableData={tableData}/>}

                        <AlterOS alterOSMShow={alterOSMShow} setAlterOSMShow={setAlterOSMShow}/>
                     </styles.tableView>
                    </ScrollView >
                </ScrollView >
            </styles.hero2>
      </ScrollView>
      </styles.Container>
  );
}