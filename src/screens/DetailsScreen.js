import React from 'react';
import {StyleSheet} from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';

const DetailsScreen = ({navigation}) => {
  const _onVolver = () => {
    console.log('Volver');
    navigation.goBack();
  };

  return (
    <Background>
      <Header>BT Log</Header>

      <Button mode="contained" onPress={_onVolver}>
        Back to BT Home
      </Button>
    </Background>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
});

export default DetailsScreen;
