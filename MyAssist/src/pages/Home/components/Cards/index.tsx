import React from 'react';
import styles from './styles';
import {Button, Alert} from 'react-native';

export default function Cards() {
  return (
    <>
      <styles.card>
        <styles.cardImage testID="com.myassist:id/imageCardComputacao" accessible={true}
          source={require('../../../../assets/images/computacao.jpg')}
        />
        <Button testID="com.myassist:id/buttonCardComputacao" accessible={true}
          title="Computadores"
          onPress={() => Alert.alert('Serviço', 'Computadores')}
        />
      </styles.card>
      <styles.card>
        <styles.cardImage testID="com.myassist:id/imageCardEletrodomesticos" accessible={true}
          source={require('../../../../assets/images/Eletrodomesticos.jpg')}
        />
        <Button testID="com.myassist:id/buttonCardEletrodomesticos" accessible={true}
          title="Eletrodomésticos"
          onPress={() => Alert.alert('Serviço', 'Eletrodomésticos')}
        />
      </styles.card>
      <styles.card>
        <styles.cardImage testID="com.myassist:id/imageCardEletronico" accessible={true}
          source={require('../../../../assets/images/eletronico.jpg')}
        />
        <Button testID="com.myassist:id/buttonCardEletronico" accessible={true}
          title="Eletrônicos"
          onPress={() => Alert.alert('Serviço', 'Eletrônicos')}
        />
      </styles.card>
    </>
  );
}
