import React from 'react';
import {StyleSheet} from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';

const Search2Screen = ({navigation}) => {
  const _onVolver = () => {
    console.log('Volver');
  };

  return (
    <Background>
      <Logo />

      <Header>CarPark Search 2</Header>

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

export default Search2Screen;
