import React from 'react';
import {StyleSheet} from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';

const DetailsScreen = ({navigation}) => {
  const _onVolver = () => {
    console.log('Volver');
  };

  return (
    <Background>
      <Logo />

      <Header>App Detail</Header>

      <Button mode="contained" onPress={_onVolver}>
        Volver
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
