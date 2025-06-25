import React, {useState} from 'react';
import { Button } from 'react-native';
import DatePicker from "react-native-date-picker";
import { Container, SelectLabel, SelectBox, HeroInput } from './styles';
import Moment from 'moment';

interface InputDateProps {
    date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
  }


export default function InputDate({date, setDate}: InputDateProps) {


  const [open, setOpen] = useState(false);


    return (
        <Container>
            <HeroInput color="black" placeholderTextColor="gray" placeholder="Selecione a data" onPress={() => setOpen(true)}>
                  <DatePicker
                    modal
                    open={open}
                    date={date}
                    onConfirm={(newDate) => {
                      setOpen(false);
                     if (newDate !== date) {
                        setDate(newDate);
                      }
                    }}
                    onCancel={() => setOpen(false)}
                  />{date.toLocaleDateString()}
            </HeroInput>
        </Container>
    );
};