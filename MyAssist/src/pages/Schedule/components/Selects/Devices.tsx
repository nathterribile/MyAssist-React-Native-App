import React, {useState} from 'react';
import { Picker } from '@react-native-picker/picker';
import { Container, SelectLabel, SelectBox } from './styles';


interface DevicesProps {
    device: string,
  setDevice: React.Dispatch<React.SetStateAction<string>>;
  }

export default function Devices ({device, setDevice}: DevicesProps) {


       const devices = {
           Tablet: {
               Apple: ['iPad 9th', 'iPad 10th', 'iPad Pro 13'],
               Samsung: ['A9', 'S6 Light', 'S9'],
               Lenovo: ['M9', 'P12']
           },
           Smartphone: {
               Apple: ['Iphone SE', 'Iphone 12', 'Iphone 13', 'Iphone 14'],
               Samsung: ['Galaxy S8', 'Galaxy A51'],
               Motorola: ['Moto G54', 'Moto E22']
           },
       };


       const [brands, setBrands] = useState<string[]>([]);

       const [selectedBrand, setSelectedBrand] = useState<string>("");

       const [models, setModels] = useState<string[]>([]);

       const [selectedModel, setSelectedModel] = useState<string>("");

       const selectDeviceChange = (itemValue) => {
         if (!setDevice) {
             console.error("setDevice is undefined");
             return;
           }
         setDevice(itemValue);
         setBrands(Object.keys(devices[itemValue] || {}));
         setSelectedBrand(Object.keys(devices[itemValue] || {})[0] || '');
         setModels(devices[itemValue]?.[Object.keys(devices[itemValue] || {})[0]] || []);
         setSelectedModel(models[0] || '');
       };

       const selectBrandChange = (itemValue) => {
           setSelectedBrand(itemValue);
           setModels(devices[device][itemValue]);
           setSelectedModel(models[0] || '');
       };




     return (
         <Container>
             <SelectLabel>Tipo de equipamento</SelectLabel>
             <SelectBox>
             <Picker mode="dropdown" selectedValue={device} onValueChange={(itemValue) => selectDeviceChange(itemValue)}>
               <Picker.Item  style={{ backgroundColor: "white" }} color="gray" label=' Selecione o equipamento' value='0' />
               {Object.keys(devices).map((deviceItem, index) => (
                 <Picker.Item style={{ backgroundColor: "white" }}  color="black" key={index} label={deviceItem} value={deviceItem} />
               ))}
             </Picker>
             </SelectBox>
             <SelectLabel>Marca</SelectLabel>
             <SelectBox>
                <Picker selectedValue={selectedBrand} onValueChange={(itemValue) => selectBrandChange(itemValue)}>
                  <Picker.Item style={{ backgroundColor: "white" }} color="gray" label=' Selecione a marca' value='0' />
                  {brands.map((brandItem, index) => (
                    <Picker.Item style={{ backgroundColor: "white" }} color="black" key={index} label={brandItem} value={brandItem} />
                ))}
             </Picker>
             </SelectBox>
             <SelectLabel>Modelo</SelectLabel>
             <SelectBox>
                <Picker selectedValue={selectedModel} onValueChange={(itemValue) => setSelectedModel(itemValue)}>
                  <Picker.Item style={{ backgroundColor: "white" }} color="gray" label=' Selecione a modelo' value='0' />
                  {models.map((modelItem, index) => (
                    <Picker.Item style={{ backgroundColor: "white" }} color="black" key={index} label={modelItem} value={modelItem} />
                ))}
             </Picker>
             </SelectBox>
         </Container>
     );
 };