//import {API_URL} from 'react-native-dotenv';
import {isExpired, decodeToken} from 'react-jwt';
//import env from "react-dotenv";
import {AUTH_LOGIN, AUTH_LOGOUT, SET_EAGLES} from './actionTypes';

const authLogin = user => {
  return {type: AUTH_LOGIN, payload: {...user}};
};

const storeData = async userInfo => {
  console.log('Guardando Datos de Login');

  try {
    //await AsyncStorage.setItem('user', userInfo.email);
    //await AsyncStorage.setItem('password', userInfo.password);
  } catch (e) {
    // saving error
    console.log('Error on Async Storage');
  }
};

export const tryLogin = (userInfo, callback) => async dispatch => {
  try {
    const url = `http://jcalvez.info/apps/carpark/login/`;
    const envio = {
      username: userInfo.email,
      password: userInfo.password,
    };

    console.log('URL: ', url);
    console.log('Envio: ', JSON.stringify(envio));

    const response = await fetch(url, {
      method: 'POST',
      dataType: 'json',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(envio),
    });

    const res = await response.json();
    console.log(res);

    if (res.status === 'ok') {
      // res.user.profile_photo =
      //   'https://lh3.googleusercontent.com/a-/AOh14Gh_olSexOtR7BDoFgCnUQBh8UDQ90tyTFn4GcJwBg';
      // const userX = decodeToken(res.token);
      // dispatch(authLogin(userX.data));
      // console.log('Despache Login', userX.data);

      // storeData(userInfo);

      dispatch(authLogin(res.user));

      callback();
    } else {
      //Alert.alert('Error de Usuario o Clave');
      alert(res.message);
    }
  } catch (error) {
    //Alert.alert('Error en la conexion');
    alert('ERROR');
  }
};

export const authLogout = () => {
  return {type: AUTH_LOGOUT, payload: {}};
};
