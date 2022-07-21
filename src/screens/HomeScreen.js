import React from 'react';
import {StyleSheet} from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';

const HomeScreen = ({navigation}) => {
  const _onDetalle = () => {
    console.log('Volver');
    navigation.navigate('DetailsScreen');
  };

  return (
    <Background>
      <Header>BT Home</Header>

      <Button mode="contained" onPress={_onDetalle}>
        Scan
      </Button>

      <Button mode="contained" onPress={_onDetalle}>
        Connect & Write
      </Button>

      <Button mode="contained" onPress={_onDetalle}>
        Disconnect
      </Button>

      <Button mode="contained" onPress={_onDetalle}>
        Log &gt;
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

export default HomeScreen;
