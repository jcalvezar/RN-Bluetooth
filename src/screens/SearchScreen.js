import React from 'react';
import {StyleSheet} from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';

const SearchScreen = ({navigation}) => {
  const _onVolver = () => {
    console.log('Search');
    navigation.navigate('Search2Screen');
  };

  return (
    <Background>
      <Logo />

      <Header>App search</Header>

      <Button mode="contained" onPress={_onVolver}>
        Do Search &gt;
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

export default SearchScreen;
