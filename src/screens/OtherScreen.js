import React from 'react';
import {StyleSheet} from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';

const OtherScreen = ({navigation}) => {
  return (
    <Background>
      <Logo />

      <Header>Other Screen</Header>
    </Background>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
});

export default OtherScreen;
