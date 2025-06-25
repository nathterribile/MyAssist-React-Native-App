import React, {useState} from 'react';
import { Button } from 'react-native';
import DatePicker from "react-native-date-picker";
import { Container, SelectLabel, SelectBox, HeroInput } from './styles';
import Moment from 'moment';

interface InputEnterDateProps {
    enterDate: Date;
  setEnterDate: React.Dispatch<React.SetStateAction<Date>>;
  }


export default function InputEnterDate({enterDate, setEnterDate}: InputEnterDateProps) {


  const [open, setOpen] = useState(false);


    return (
        <Container>
            <HeroInput color="black" placeholderTextColor="gray" placeholder="Selecione a data" onPress={() => setOpen(true)}>
                  <DatePicker
                    modal
                    open={open}
                    date={enterDate}
                    onConfirm={(newDate) => {
                      setOpen(false);
                     if (newDate !== enterDate) {
                        setDate(newDate);
                      }
                    }}
                    onCancel={() => setOpen(false)}
                  />{enterDate.toLocaleDateString()}
            </HeroInput>
        </Container>
    );
};