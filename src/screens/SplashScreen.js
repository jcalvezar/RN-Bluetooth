import React from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';

const SplashScreen = ({navigation}) => {
  return (
    <Background>
      <Logo />
      <Header>App splash</Header>
    </Background>
  );
};

export default SplashScreen;
