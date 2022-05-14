// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  doc,
  collection,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";

// Redux
import store from "../redux/store";
import { SET_PARKINGS } from "../redux/parkings/actionTypes";
import { SET_VEHICLES } from "../redux/vehicles/actionTypes";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDI_l0vuOQR9Xy9qabuXPyY3E112X2eJsU",
  authDomain: "carpark-e047f.firebaseapp.com",
  projectId: "carpark-e047f",
  storageBucket: "carpark-e047f.appspot.com",
  messagingSenderId: "1038828138759",
  appId: "1:1038828138759:web:5eee97164979705be7d5a2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

//const empresaDocRef = collection(db, "empresas").doc("sROVicT6y4Xs5Bg9h96N");

const empresaDocRef = doc(db, "/empresas/sROVicT6y4Xs5Bg9h96N");

// Query de Estacionamientos
const q1 = query(
  collection(db, "estacionamientos"),
  where("id_empresa", "==", empresaDocRef)
);

const unsubscribe1 = onSnapshot(q1, (querySnapshot) => {
  console.log("Suscribiendome a Parkings");

  const parkings = [];
  querySnapshot.forEach((doc) => {
    const parking = { id: doc.id, ...doc.data() };
    parkings.push(parking);
  });
  store.dispatch({ type: SET_PARKINGS, payload: { parkings } });
  //console.log("Current Parkings: ", parkings);
});

// Query de Vehiculos
const q2 = query(
  collection(db, "vehiculos"),
  where("id_empresa", "==", empresaDocRef)
);

const unsubscribe2 = onSnapshot(q2, (querySnapshot) => {
  console.log("Suscribiendome a Cars");

  const vehicles = [];
  querySnapshot.forEach((doc) => {
    console.log("DOC ID: ", doc.id);
    const vehicle = { id: doc.id, ...doc.data() };
    vehicles.push(vehicle);
  });
  vehicles.sort((x, y) => x.puesto - y.puesto);
  store.dispatch({ type: SET_VEHICLES, payload: { vehicles } });
  //console.log("Current Cars: ", cars);
});

console.log("Configurando FireBase");

export default db;
