import React from 'react';
import styles from './styles';
import {Button, Alert} from 'react-native';

export default function Cards() {
  return (
    <>
      <styles.card>
        <styles.cardImage
          source={require('../../../../assets/images/computacao.jpg')}
        />
        <Button
          title="Computadores"
          onPress={() => Alert.alert('Serviço', 'Computadores')}
        />
      </styles.card>
      <styles.card>
        <styles.cardImage
          source={require('../../../../assets/images/Eletrodomesticos.jpg')}
        />
        <Button
          title="Eletrodomésticos"
          onPress={() => Alert.alert('Serviço', 'Eletrodomésticos')}
        />
      </styles.card>
      <styles.card>
        <styles.cardImage
          source={require('../../../../assets/images/eletronico.jpg')}
        />
        <Button
          title="Eletrônicos"
          onPress={() => Alert.alert('Serviço', 'Eletrônicos')}
        />
      </styles.card>
    </>
  );
}
