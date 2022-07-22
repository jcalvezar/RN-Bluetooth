import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {Text} from 'react-native-paper';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import miBlutus from '../services/BTservices';
import {useSelector} from 'react-redux';

const HomeScreen = ({navigation}) => {
  const {lineas} = useSelector(state => state.logReducer);

  const _onDetalle = () => {
    console.log('Volver');
    navigation.navigate('DetailsScreen');
  };

  const _handleEscanear = () => {
    console.log('Escaneando...');
    miBlutus.buscarMaquinas(() => {
      console.log('Escaneo Terminado...');
    });
  };

  return (
    <Background>
      <Header>BT Home</Header>

      <Button mode="contained" onPress={_handleEscanear}>
        Scan
      </Button>

      <Button mode="contained" onPress={_onDetalle}>
        Connect & Write
      </Button>

      <Button mode="contained" onPress={_onDetalle}>
        Disconnect
      </Button>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.texto}>
          {lineas.map((linea, idx) => (
            <Text key={idx}>{linea}</Text>
          ))}
        </View>
      </ScrollView>

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
  scrollView: {
    width: '100%',
  },
});

export default HomeScreen;
