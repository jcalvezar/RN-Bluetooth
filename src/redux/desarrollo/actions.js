import {ADD_LOG, CLEAN_LOG} from './actionTypes';

export const addLog = (linea) => {
  console.log('ADD LOG: ', linea);
  return {type: ADD_LOG, payload: {linea}};
};

export const cleanLog = () => {
  console.log('CLEAN LOG ');
  return {type: CLEAN_LOG, payload: {}};
};
