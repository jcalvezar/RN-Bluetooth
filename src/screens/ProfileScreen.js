import React from 'react';
import {StyleSheet} from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import {useDispatch} from 'react-redux';
import {authLogout} from '../redux/auth/actions';

const ProfileScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const _onVolver = () => {
    console.log('Volver');
    dispatch(authLogout());
  };

  return (
    <Background>
      <Logo />

      <Header>Profile</Header>

      <Button mode="contained" onPress={_onVolver}>
        Log out
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

export default ProfileScreen;
