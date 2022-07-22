import {NativeModules, NativeEventEmitter} from 'react-native';
import store from '../redux/store';
import {addLog, setCallback, cleanCallback} from '../redux/desarrollo/actions';
import {bytesToString} from 'convert-string';
import BleManager from 'react-native-ble-manager';
const BleManagerModule = NativeModules.BleManager;
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);

var Buffer = require('buffer/').Buffer;

class Blutus {
  constructor() {
    console.log('Blutus constructor');
    this.alcanzables = [];
    this.onScanComplete = null;

    BleManager.start()
      .then(() => {
        // Success code
        console.log('BLE Module initialized');
        store.dispatch(addLog(`BLE Module initialized`));
      })
      .catch(error => {
        console.log('BLE Module Error on Start ' + error);
        store.dispatch(addLog('BLE Module Error on Start ' + error));
      });

    bleManagerEmitter.addListener(
      'BleManagerDiscoverPeripheral',
      this.handleDiscoveredDevice,
    );
    bleManagerEmitter.addListener(
      'BleManagerStopScan',
      this.handleScanComplete,
    );
    bleManagerEmitter.addListener(
      'BleManagerDidUpdateValueForCharacteristic',
      this.handleUpdateValueForCharacteristic,
    );
    bleManagerEmitter.addListener('BleManagerDidUpdateState', res => {
      console.log('////////////////////////\nReportandome Sargento: ', res);
      store.dispatch(addLog('Reportandome Sargento: ', res));
    });
  }

  // Getter
  get Alcanzables() {
    console.log('GEtting  Blutus Alcanzables ', this.alcanzables);
    return this.alcanzables;
  }

  // Setter
  set Alcanzables(nuevos) {
    console.log('setting Blutus Alcanzables ', nuevos);
    this.alcanzables = nuevos;
  }

  // ************************************************
  // Handlers de Eventus Blutus

  // Handler DiscoveredDevice
  handleDiscoveredDevice = data => {
    console.log(
      'Blutus: Discovered Device-> ID:',
      data.id,
      ' Name:',
      data.name,
    );
    store.dispatch(
      addLog('Blutus: Discovered Device-> ID:', data.id, ' Name:', data.name),
    );
    if (!this.alcanzables.includes(data.id)) {
      this.alcanzables.push(data.id);
    }
  };

  // Handler ScanComplete
  handleScanComplete = data => {
    console.log('Blutus: Scan Complete. Found:');
    console.log('--------------------------------');
    this.alcanzables.map((id, idx) => {
      console.log(idx, id);
    });

    store.dispatch(addLog('Blutus: Scan Complete.'));
    if (this.onScanComplete) {
      this.onScanComplete(this.alcanzables);
      this.onScanComplete = null;
    }
  };

  // Handler UpdateValueForCharacteristic
  handleUpdateValueForCharacteristic = data => {
    console.log('Blutus: Update Value For Characteristic: ', data);
  };

  // ************************************************
  // Metodos de Blutus
  // ************************************************

  // Metodo para buscar maquinas
  buscarMaquinas = onScanComplete => {
    this.alcanzables = [];
    this.onScanComplete = onScanComplete;

    console.log('Blutus: Iniciando Scan...');
    store.dispatch(addLog('Blutus: Iniciando Scan...'));
    BleManager.scan([], 10, true)
      .then(() => {
        console.log('Blutus: Buscando maquinas...');
      })
      .catch(error => {
        console.log('Blutus: Error al buscar maquinas...');
        console.log(error);
      });
  };

  // Metodo para conectar maquinas
  conectarDevice = peripheralId => {
    console.log('----------------------------------------');
    console.log('Blutus: Intentando conectar a maquina...');
    BleManager.connect(peripheralId)
      .then(() => {
        console.log('Blutus: Conectando maquina...');
      })
      .catch(error => {
        console.log('Blutus: Error al conectar maquina...');
        console.log(error);
      });
  };

  // Metodo para conectar maquinas
  desconectarDevice = peripheralId => {
    console.log('Blutus: Intentando DesConectar maquina...', peripheralId);
    BleManager.disconnect(peripheralId.toUpperCase())
      .then(() => {
        console.log('Blutus: DesConectando maquina...');
      })
      .catch(error => {
        console.log('Blutus: Error al desconectar maquina...');
        console.log(error);
      });
  };
}

const miBlutus = new Blutus();
export default miBlutus;
