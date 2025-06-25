import React, {useState} from 'react';
import { Button } from 'react-native';
import DatePicker from "react-native-date-picker";
import { Container, SelectLabel, SelectBox, HeroInput } from './styles';
import Moment from 'moment';

interface InputDeliveryDateProps {
    deliveryDate: Date;
  setDeliveryDate: React.Dispatch<React.SetStateAction<Date>>;
  }


export default function InputDeliveryDate({deliveryDate, setDeliveryDate}: InputDeliveryDateProps) {


  const [open, setOpen] = useState(false);


    return (
        <Container>
            <HeroInput color="black" placeholderTextColor="gray" placeholder="Selecione a data" onPress={() => setOpen(true)}>
                  <DatePicker
                    modal
                    open={open}
                    date={deliveryDate}
                    onConfirm={(newDate) => {
                      setOpen(false);
                     if (newDate !== deliveryDate) {
                        setDate(newDate);
                      }
                    }}
                    onCancel={() => setOpen(false)}
                  />{deliveryDate.toLocaleDateString()}
            </HeroInput>
        </Container>
    );
};